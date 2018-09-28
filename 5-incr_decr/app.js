const client = require('../client');

(async function() {
  await client.incrAsync('mykey');
  try {
    const value = await client.getAsync('mykey');
    console.log(value);
    await client.decrAsync('mykey');
  } catch (e) {
    console.log('Error:', e);
  }
  process.exit();
})();
