const redisClient = require('redis-connection')();
redisClient.set('hello', 'world');
redisClient.get('hello', (err, res) => {
  console.log('hello', res.toString());
  process.exit();
});
