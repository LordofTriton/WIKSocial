'use server'

import Redis from "../clients/redis.client";

export async function SetRedis(session: string, key: string, value: any) {
    await Redis.set(`${session}:${key}`, value);
}
    
export async function GetRedis(session: string, key: string) {
    const result = await Redis.get(`${session}:${key}`);
    return result ?? null;
}