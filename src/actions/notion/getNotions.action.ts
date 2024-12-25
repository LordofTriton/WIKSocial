"use server";

import Database from "../../orm/database";
import { Notion } from "../../constants/entities/notion.entity";
import { GetNotionsRequest } from "../../constants/requests/notion.requests";
import { WikResponse } from "../../constants/responses/response";
import { WikServerAction } from "../server.action";

export const GetNotionsAction = async (data: GetNotionsRequest): Promise<WikResponse<Notion[]>> => WikServerAction(async () => {
    const { page, pageSize, ...params } = data;

    const communities =  await Database.Notion.find({
        where: params,
        relations: {
            referenceUser: true,
            referenceCommunity: true,
            referencePost: true
        }
    });

    return WikResponse.Success({ data: communities, message: "Notions fetched successfully." });
});