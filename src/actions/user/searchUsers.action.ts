"use server";

import Database from "../../orm/database";
import { User } from "../../constants/entities/user.entity";
import { SearchUsersRequest } from "../../constants/requests/user.requests";
import { WikResponse } from "../../constants/responses/response";
import { WikServerAction } from "../server.action";

export const SearchUsersAction = async (data: SearchUsersRequest): Promise<WikResponse<User[]>> => WikServerAction(async () => {
    const { page, pageSize, query } = data;

    const communities =  await Database.User.createQueryBuilder("user")
        .leftJoinAndSelect("user.profileImage", "profileImage")
        .leftJoinAndSelect("user.coverImage", "coverImage")
        .where("user.username ~* :regex", { regex: `^${query}` })
        .getMany();

    return WikResponse.Success({ data: communities, message: "Users fetched successfully." });
});