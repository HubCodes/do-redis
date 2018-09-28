const redisClient = require('redis-connection')();
redisClient.append('hello', 'world');
redisClient.get('hello', (err, res) => {
  console.log('hello:', res);
  redisClient.set('hello', 'world', () => {
    process.exit();
  });
});
