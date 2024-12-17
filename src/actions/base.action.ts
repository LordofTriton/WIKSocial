"use server";

import { WikResponse } from "../constants/responses/response";

export async function WikServerAction<K, T>(action: (params: K) => Promise<WikResponse<T>>) {
    return async (params: K) => {
        try {
            return await action(params);
        } catch (error) {
            console.error('Error in server action:', error);
            throw new Error('An unexpected error occurred. Please try again.');
        }
    };
}