"use server";

import Prisma from "../../clients/prisma.client";
import { Settings } from "../../constants/entities/settings.entity";
import { UpdateSettingsRequest } from "../../constants/requests/settings.requests";
import { WikResponse } from "../../constants/responses/response";
import { WikMapper } from "../../util/mapper.util";

export async function UpdateSettingsAction(data: UpdateSettingsRequest): Promise<WikResponse<Settings>> {
    try {
        const existingSettings = await Prisma.settings.findUnique({ where: { userId: data.userId } });
        if (!existingSettings) return WikResponse.Failure({ error: "Settings not found." });
        
        let settings: Settings = WikMapper.map(data, Settings);
    
        const result = await Prisma.settings.update({ where: {  }, data: settings as any });
    
        return WikResponse.Update({ data: WikMapper.map(result, Settings, true), message: "Settings updated successfully." });
    }
    catch (error) {
        console.error('Error in server action:', error);
        throw new Error('An unexpected error occurred. Please try again.');
    }
}