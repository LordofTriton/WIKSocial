'use server'

import Redis from "../clients/redis.client";

export async function SetRedis(session: string, key: string, value: any) {
    await Redis.hSet(session, key, value);
}
    
export async function GetRedis(session: string, key: string) {
    const result = await Redis.hGet(session, key);
    return result ?? null;
}