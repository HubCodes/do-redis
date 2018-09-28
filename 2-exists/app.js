const redisClient = require('redis-connection')();
redisClient.exists('hello', (err, res) => {
  console.log('exists hello:', !!res);
  process.exit();
});
