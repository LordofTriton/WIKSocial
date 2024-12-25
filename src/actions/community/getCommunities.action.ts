"use server";

import Database from "../../orm/database";
import { Community } from "../../constants/entities/community.entity";
import { GetCommunitiesRequest } from "../../constants/requests/community.requests";
import { WikResponse } from "../../constants/responses/response";
import { WikServerAction } from "../server.action";

export const GetCommunitiesAction = async (data: GetCommunitiesRequest): Promise<WikResponse<Community[]>> => WikServerAction(async () => {
    const { page, pageSize, ...params } = data;

    const communities =  await Database.Community.find({
        where: params,
        relations: {
            profileImage: true,
            coverImage: true
        }
    });

    return WikResponse.Success({ data: communities, message: "Communities fetched successfully." });
});