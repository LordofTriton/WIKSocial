const RedisClient = require("ioredis");

const Redis = new RedisClient(process.env.REDIS_URL, { maxRetriesPerRequest: null });

Redis.on("connect", () => {
    console.log("Redis connection established!");
});
    
Redis.on("error", (err) => {
    console.log("Redis connection error", err);
});

export default Redis;