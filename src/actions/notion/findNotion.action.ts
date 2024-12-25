"use server";

import Database from "../../orm/database";
import { Notion } from "../../constants/entities/notion.entity";
import { FindNotionRequest } from "../../constants/requests/notion.requests";
import { WikResponse } from "../../constants/responses/response";
import { WikMapper } from "../../util/mapper.util";
import { WikServerAction } from "../server.action";

export const FindNotionAction = async (data: FindNotionRequest): Promise<WikResponse<Notion>> => WikServerAction(async () => {
    const notion =  await Database.Notion.findOne({
        where: data,
        relations: {
            referenceUser: true,
            referenceCommunity: true,
            referencePost: true
        }
    });

    const notionData = WikMapper.map(notion, Notion, true);
    return WikResponse.Success({ data: notionData, message: "Notion fetched successfully." });
});