"use server";

import Database from "../../orm/database";
import { Community } from "../../constants/entities/community.entity";
import { SearchCommunitiesRequest } from "../../constants/requests/community.requests";
import { WikResponse } from "../../constants/responses/response";
import { WikServerAction } from "../server.action";

export const SearchCommunitiesAction = async (data: SearchCommunitiesRequest): Promise<WikResponse<Community[]>> => WikServerAction(async () => {
    const { page, pageSize, query } = data;

    const communities =  await Database.Community.createQueryBuilder("community")
        .leftJoinAndSelect("community.profileImage", "profileImage")
        .leftJoinAndSelect("community.coverImage", "coverImage")
        .where("community.name ~* :regex", { regex: `^${query}` })
        .getMany();

    return WikResponse.Success({ data: communities, message: "Communities fetched successfully." });
});