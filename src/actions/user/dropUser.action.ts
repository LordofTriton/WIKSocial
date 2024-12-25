"use server";

import Database from "../../orm/database";
import { WikResponse } from "../../constants/responses/response";
import { WikServerAction } from "../server.action";

export const DropUserAction = async (userId: number): Promise<WikResponse<null>> => WikServerAction(async () => {
    const existingUser = await Database.User.findOne({ where: { userId } });
    if (!existingUser) return WikResponse.Failure({ error: "User not found." });

    await Database.User.delete({ userId });

    return WikResponse.Delete({ data: null, message: "User deleted successfully and permanently." });
});