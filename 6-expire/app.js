const client = require('../client');

(async function() {
  await client.setAsync('test_for_expire', 304);
  await client.expireAsync('test_for_expire', 2);
  let TTL = await client.ttlAsync('test_for_expire');
  console.log(TTL);
  setTimeout(async () => {
    TTL = await client.ttlAsync('test_for_expire');
    console.log(TTL);
    process.exit();
  }, 3000);
})();
