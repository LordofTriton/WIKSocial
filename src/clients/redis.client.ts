const RedisClient = require("ioredis");

export default function getRedisClient() {
    let Redis;
    
    if (!global.Redis) {
        console.log("Redis connection established!");

        Redis = new RedisClient(process.env.REDIS_URL, { maxRetriesPerRequest: 1 });

        global.Redis = Redis;
    }

    Redis = global.Redis;

    return Redis;
}