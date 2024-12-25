"use server";

import Database from "../../orm/database";
import { Notion } from "../../constants/entities/notion.entity";
import { UpdateNotionRequest } from "../../constants/requests/notion.requests";
import { WikResponse } from "../../constants/responses/response";
import { WikMapper } from "../../util/mapper.util";
import { WikServerAction } from "../server.action";

export const UpdateNotionAction = async (data: UpdateNotionRequest): Promise<WikResponse<Notion>> => WikServerAction(async () => {
    const existingNotion = await Database.Notion.findOne({ where: { notionId: data.notionId } });
    if (!existingNotion) return WikResponse.Failure({ error: "Notion not found." });

    let updates = WikMapper.map(data, UpdateNotionRequest);

    const result = await Database.Notion.update({ notionId: data.notionId }, updates);

    return WikResponse.Update({ data: WikMapper.map(result, Notion, true), message: "Notion updated successfully." });
});