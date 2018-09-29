const client = require('../client');

(async function() {
  // 트랜잭션 시작
  const multi = client.multi();
  multi.incr('foo');
  multi.incr('bar');
  try {
    // 트랜잭션 끝. 트랜잭션으로 묶인 모든 쿼리 실행
    const result = await multi.execAsync();
    console.log('result:', result);
    await client.del('foo');
    await client.del('bar');
  } catch (e) {
    // 레디스의 트랜잭션에서 자동 롤백은 지원되지 않는다!
    await client.discardAsync();
    console.error('Error:', e);
  } finally {
    process.exit();
  }
})();
/*
  레디스에서는 트랜잭션이 구성되고 있는 와중에 다른 클라이언트에서부터 트랜잭션
  에 의해 변경되거나 참조되는 대상에 대한 WATCH연산을 통해, 트랜잭션 도중 대상
  의 변경을 감지해 트랜잭션을 실패하게 만들 수 있다. 만약 WATCH를 모두 취소하려
  면 UNWATCH 명령을 사용하면 된다.
 */
