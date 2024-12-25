"use server";

import Database from "../../orm/database";
import { WikResponse } from "../../constants/responses/response";
import { CreateReactionRequest } from "../../constants/requests/reaction.requests";
import { Reaction } from "../../constants/entities/reaction.entity";
import { WikServerAction } from "../server.action";
import { WikMapper } from "../../util/mapper.util";

export const CreateReactionAction = async (data: CreateReactionRequest): Promise<WikResponse<Reaction>> => WikServerAction(async () => {
    const createdReaction = Database.Reaction.create(data);
    const newReaction = await Database.Reaction.save(createdReaction);

    return WikResponse.Update({ data: WikMapper.toObject(newReaction), message: "Reaction created successfully." });
});