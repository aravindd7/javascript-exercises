// Asked by Facebook

// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.
// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.
// You can assume that the messages are decodable. For example, '001' is not allowed.

const letters = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15',
  '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26'
];

const countDecodedMessages = (code) => {
  if (code.substring(0, 1) === '0') {
    return 0;
  }
  if (letters.includes(code)) {
    return code.length;
  }
  let oneDigitWay = countDecodedMessages(code.substring(1));
  let twoDigitWay = letters.includes(code.substring(0, 2)) ? countDecodedMessages(code.substring(2)) : 0;

  return oneDigitWay + twoDigitWay;
}

let start = new Date().getTime();
let res = countDecodedMessages('12315');
let end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);

start = new Date().getTime();
res = countDecodedMessages('26');
end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);

start = new Date().getTime();
res = countDecodedMessages('27');
end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);

start = new Date().getTime();
res = countDecodedMessages('01');
end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);

start = new Date().getTime();
res = countDecodedMessages('23745682734658723648297346598276345867239847562873645826345987624987562987465982674589762348756298298374658927459829836234875629829837465892745982983623487562982983746589274598298374658927458263459876249875629874263459876249875629874659826745897623487562983746589276349587687623876452786345862387456');
end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);

// applying dynamic programming
const cache = {};
const countDecodedMessagesWithMemo = (code) => {
  if (cache[code]) {
    return cache[code];
  }
  if (code.substring(0, 1) === '0') {
    return 0;
  }
  if (letters.includes(code)) {
    return code.length;
  }
  const oneDigitWay = countDecodedMessagesWithMemo(code.substring(1));
  const twoDigitWay = letters.includes(code.substring(0, 2)) ? countDecodedMessagesWithMemo(code.substring(2)) : 0;
  const result = oneDigitWay + twoDigitWay;

  cache[code] = result;
  return result;
}

start = new Date().getTime();
res = countDecodedMessagesWithMemo('23745682734658723648297346598276345867239847562873645826345987624987562987465982674589762348756298298374658927459829836234875629829837465892745982983623487562982983746589274598298374658927458263459876249875629874263459876249875629874659826745897623487562983746589276349587687623876452786345862387456');
end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);