"use server";

import Database from "../../orm/database";
import { Community } from "../../constants/entities/community.entity";
import { WikResponse } from "../../constants/responses/response";
import { WikMapper } from "../../util/mapper.util";
import { FindOptionsRelations } from "typeorm";
import { WikServerAction } from "../server.action";

export const FindCommunityAction = async (id: any, relations?: FindOptionsRelations<Community>): Promise<WikResponse<Community>> => WikServerAction(async () => {
    const community =  await Database.Community.findOne({
        where: [
            { communityId: id },
            { cid: id }
        ],
        relations: {
            profileImage: true,
            coverImage: true,

            ...relations
        }
    });

    const communityData = WikMapper.map(community, Community, true);
    return WikResponse.Success({ data: communityData, message: "Community fetched successfully." });
});