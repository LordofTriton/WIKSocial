"use server";

import Database from "../../orm/database";
import { User } from "../../constants/entities/user.entity";
import { UpdateUserRequest } from "../../constants/requests/user.requests";
import { WikResponse } from "../../constants/responses/response";
import { WikMapper } from "../../util/mapper.util";
import { WikServerAction } from "../server.action";

export const UpdateUserAction = async (data: UpdateUserRequest): Promise<WikResponse<User>> => WikServerAction(async () => {
    const existingUser = await Database.User.findOne({ where: { userId: data.userId } });
    if (!existingUser) return WikResponse.Failure({ error: "User not found." });

    let updates = WikMapper.map(data, UpdateUserRequest);

    const result = await Database.User.update({ userId: data.userId }, updates);

    return WikResponse.Update({ data: WikMapper.map(result, User, true), message: "User updated successfully." });
});