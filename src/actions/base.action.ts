"use server";

import { WikResponse } from "../constants/responses/response";
import { WikMapper } from "../util/mapper.util";

export function WikServerAction<K, T>(action: (params: K) => Promise<WikResponse<T>>) {
    return async (params: K) => {
        const plainParams: any = WikMapper.toObject(params);

        try {
            return await action(plainParams);
        } catch (error) {
            console.error('Error in server action:', error);
            throw new Error('An unexpected error occurred. Please try again.');
        }
    };
}