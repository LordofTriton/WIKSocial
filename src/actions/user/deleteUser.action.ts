"use server";

import Prisma from "../../clients/prisma.client";
import { UserStatusEnum } from "../../constants/enums/user.enums";
import { WikResponse } from "../../constants/responses/response";

export async function DeleteUserAction(userId: number): Promise<WikResponse<null>> {
    const existingUser = await Prisma.user.findFirst({ where: { userId } });
    if (!existingUser) return WikResponse.Failure({ error: "User not found." });

    await Prisma.user.update({ where: { userId }, data: { userStatus: UserStatusEnum.DELETED } });

    return WikResponse.Delete({ data: null, message: "User deleted successfully." });
}