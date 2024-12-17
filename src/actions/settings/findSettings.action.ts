"use server";

import Prisma from "../../clients/prisma.client";
import { Settings } from "../../constants/entities/settings.entity";
import { WikResponse } from "../../constants/responses/response";
import { WikMapper } from "../../util/mapper.util";

export async function FindSettingsAction(userId: number): Promise<WikResponse<Settings>> {
    const settings =  await Prisma.settings.findFirst({ where: { userId } });

    const settingsData = WikMapper.map(settings, Settings, true);
    return WikResponse.Success({ data: settingsData, message: "Settings fetched successfully." });
}