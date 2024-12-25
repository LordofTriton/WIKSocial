"use server";

import Database from "../../orm/database";
import { WikResponse } from "../../constants/responses/response";
import { CreateNotionRequest } from "../../constants/requests/notion.requests";
import { Notion } from "../../constants/entities/notion.entity";
import { WikServerAction } from "../server.action";
import { WikMapper } from "../../util/mapper.util";

export const CreateNotionAction = async (data: CreateNotionRequest): Promise<WikResponse<Notion>> => WikServerAction(async () => {
    const createdNotion = Database.Notion.create(data);
    const newNotion = await Database.Notion.save(createdNotion);

    return WikResponse.Update({ data: WikMapper.toObject(newNotion), message: "Notion created successfully." });
});