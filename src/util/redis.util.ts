'use server'

import getRedisClient from "../clients/redis.client";

export async function SetRedis(session: string, key: string, value: any) {
    const Redis = getRedisClient();
    await Redis.set(`${session}:${key}`, value);
}
    
export async function GetRedis(session: string, key: string) {
    const Redis = getRedisClient();
    const result = await Redis.get(`${session}:${key}`);
    return result ?? null;
}

export async function DeleteRedis(session: string, key: string) {
    const Redis = getRedisClient();
    await Redis.del(`${session}:${key}`);
}

export async function ClearRedis(userId: number) {
    const Redis = getRedisClient();
    const pattern = `session:${userId}:*`;
    const keys = await Redis.keys(pattern);

    if (keys.length === 0) return;

    await Redis.del(...keys);
}