import redis from 'redis';

const Redis = redis.createClient({
    url: process.env.REDIS_URL // Replace with your Redis connection string
});

await Redis.connect();

export default Redis;