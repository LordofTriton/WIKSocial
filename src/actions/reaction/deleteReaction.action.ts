"use server";

import Database from "../../orm/database";
import { WikResponse } from "../../constants/responses/response";
import { WikServerAction } from "../server.action";

export const DeleteReactionAction = async (userId: number, referenceId: number): Promise<WikResponse<null>> => WikServerAction(async () => {
    const existingReaction = await Database.Reaction.findOne({ where: { userId, referenceId } });
    if (!existingReaction) return WikResponse.Failure({ error: "Reaction not found." });

    await Database.Reaction.delete({ userId, referenceId });

    return WikResponse.Delete({ data: null, message: "Reaction deleted successfully." });
});