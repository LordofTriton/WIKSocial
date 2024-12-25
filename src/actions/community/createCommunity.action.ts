"use server";

import Database from "../../orm/database";
import { WikResponse } from "../../constants/responses/response";
import { CreateCommunityRequest } from "../../constants/requests/community.requests";
import { Community } from "../../constants/entities/community.entity";
import { WikServerAction } from "../server.action";
import { WikMapper } from "../../util/mapper.util";

export const CreateCommunityAction = async (data: CreateCommunityRequest): Promise<WikResponse<Community>> => WikServerAction(async () => {
    const createdCommunity = Database.Community.create(data);
    const newCommunity = await Database.Community.save(createdCommunity);

    return WikResponse.Update({ data: WikMapper.toObject(newCommunity), message: "Community created successfully." });
});