"use server";

import Database from "../../orm/database";
import { User } from "../../constants/entities/user.entity";
import { GetUsersRequest } from "../../constants/requests/user.requests";
import { WikResponse } from "../../constants/responses/response";
import { WikMapper } from "../../util/mapper.util";
import { WikServerAction } from "../server.action";

export const GetUsersAction = async (data: GetUsersRequest): Promise<WikResponse<User[]>> => WikServerAction(async () => {
    const { page, pageSize, ...params } = data;

    const user =  await Database.User.find({
        where: params,
        relations: {
            profileImage: true,
            coverImage: true
        }
    });

    const userData = WikMapper.map(user, User, true);
    return WikResponse.Success({ data: userData, message: "Users fetched successfully." });
});