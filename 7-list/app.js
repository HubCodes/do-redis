const client = require('../client');

(async function() {
  await client.rpushAsync('fruits', 'Apple');
  await client.rpushAsync('fruits', 'Banana');
  await client.lpushAsync('fruits', 'Mango');
  /*
    LRANGE:
    LRANGE는 세 개의 인수를 받습니다: list, start, end. 
    list의 start부터 end까지의 요소를 결과로 내보냅니다.
    음수 인덱스는 rbegin을 의미합니다.
  */
  const result = await client.lrangeAsync('fruits', 0, -1);
  console.log(result);
  console.log('List length:', await client.llenAsync('fruits'));
  await client.delAsync('fruits', []);
  process.exit();
})();
