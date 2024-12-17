"use server";

import Prisma from "../../clients/prisma.client";
import { WikResponse } from "../../constants/responses/response";

export async function DropUserAction(userId: number): Promise<WikResponse<null>> {
    const existingUser = await Prisma.user.findFirst({ where: { userId } });
    if (!existingUser) return WikResponse.Failure({ error: "User not found." });

    await Prisma.user.delete({ where: { userId } });

    return WikResponse.Delete({ data: null, message: "User deleted successfully and permanently." });
}