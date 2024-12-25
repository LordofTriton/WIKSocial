"use server";

import Database from "../../orm/database";
import { Settings } from "../../constants/entities/settings.entity";
import { UpdateSettingsRequest } from "../../constants/requests/settings.requests";
import { WikResponse } from "../../constants/responses/response";
import { WikMapper } from "../../util/mapper.util";
import { WikServerAction } from "../server.action";

export const UpdateSettingsAction = async (data: UpdateSettingsRequest): Promise<WikResponse<Settings>> => WikServerAction(async () => {
    const existingSettings = await Database.Settings.findOne({ where: { userId: data.userId } });
    if (!existingSettings) return WikResponse.Failure({ error: "Settings not found." });
    
    let updates = WikMapper.map(data, UpdateSettingsRequest);

    const result = await Database.Settings.update({ userId: data.userId }, updates);

    return WikResponse.Update({ data: WikMapper.map(result, Settings, true), message: "Settings updated successfully." });
});