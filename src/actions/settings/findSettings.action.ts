"use server";

import Database from "../../orm/database";
import { Settings } from "../../constants/entities/settings.entity";
import { WikResponse } from "../../constants/responses/response";
import { WikMapper } from "../../util/mapper.util";
import { WikServerAction } from "../server.action";

export const FindSettingsAction = async (userId: number): Promise<WikResponse<Settings>> => WikServerAction(async () => {
    const settings =  await Database.Settings.findOne({ where: { userId } });

    const settingsData = WikMapper.map(settings, Settings, true);
    return WikResponse.Success({ data: settingsData, message: "Settings fetched successfully." });
});