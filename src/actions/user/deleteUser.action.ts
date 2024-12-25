"use server";

import Database from "../../orm/database";
import { UserStatusEnum } from "../../constants/enums/user.enums";
import { WikResponse } from "../../constants/responses/response";
import { WikServerAction } from "../server.action";

export const DeleteUserAction = async (userId: number): Promise<WikResponse<null>> => WikServerAction(async () => {
    const existingUser = await Database.User.findOne({ where: { userId } });
    if (!existingUser) return WikResponse.Failure({ error: "User not found." });

    await Database.User.update({ userId }, { userStatus: UserStatusEnum.DELETED } );

    return WikResponse.Delete({ data: null, message: "User deleted successfully." });
});