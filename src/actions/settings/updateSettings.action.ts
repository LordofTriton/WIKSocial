"use server";

import Prisma from "../../clients/prisma.client";
import { Settings } from "../../constants/entities/settings.entity";
import { UpdateSettingsRequest } from "../../constants/requests/settings.requests";
import { WikResponse } from "../../constants/responses/response";
import { WikMapper } from "../../util/mapper.util";

export async function UpdateSettingsAction(data: UpdateSettingsRequest): Promise<WikResponse<Settings>> {
    const existingSettings = await Prisma.settings.findFirst({ where: { userId: data.userId } });
    if (!existingSettings) return WikResponse.Failure({ error: "Settings not found." });
    
    let updates = WikMapper.map(data, UpdateSettingsRequest);

    const result = await Prisma.settings.update({ where: { userId: data.userId }, data: updates });

    return WikResponse.Update({ data: WikMapper.map(result, Settings, true), message: "Settings updated successfully." });
}