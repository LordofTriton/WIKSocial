"use server";

import Database from "../../orm/database";
import { Community } from "../../constants/entities/community.entity";
import { UpdateCommunityRequest } from "../../constants/requests/community.requests";
import { WikResponse } from "../../constants/responses/response";
import { WikMapper } from "../../util/mapper.util";
import { WikServerAction } from "../server.action";

export const UpdateCommunityAction = async (data: UpdateCommunityRequest): Promise<WikResponse<Community>> => WikServerAction(async () => {
    const existingCommunity = await Database.Community.findOne({ where: { communityId: data.communityId } });
    if (!existingCommunity) return WikResponse.Failure({ error: "Community not found." });

    let updates = WikMapper.map(data, UpdateCommunityRequest);

    const result = await Database.Community.update({ communityId: data.communityId }, updates);

    return WikResponse.Update({ data: WikMapper.map(result, Community, true), message: "Community updated successfully." });
});