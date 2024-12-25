"use server";

import Database from "../../orm/database";
import { Reaction } from "../../constants/entities/reaction.entity";
import { GetReactionsRequest } from "../../constants/requests/reaction.requests";
import { WikResponse } from "../../constants/responses/response";
import { WikServerAction } from "../server.action";

export const GetReactionsAction = async (data: GetReactionsRequest): Promise<WikResponse<Reaction[]>> => WikServerAction(async () => {
    const { page, pageSize, ...params } = data;

    const communities =  await Database.Reaction.find({
        where: params,
        relations: {
            referenceComment: true,
            referencePost: true
        }
    });

    return WikResponse.Success({ data: communities, message: "Reactions fetched successfully." });
});