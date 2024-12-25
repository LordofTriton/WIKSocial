"use server";

import { WikResponse } from "../constants/responses/response";
import { WikMapper } from "../util/mapper.util";

export const WikServerAction = async (fn: () => Promise<any>) => {
    try {
        return await fn();
    } catch (error) {
        console.error('Error in server action:', error);
        throw new Error('An unexpected error occurred. Please try again.');
    }
}