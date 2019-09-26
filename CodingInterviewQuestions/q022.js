// Asked by Amazon

// Given an integer k and a string s, find the length of the longest substring that contains at most k distinct 
// characters.
// For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".

const search = (str, k) => {
  let maxLength = 0;
  let length = 0;
  let chars = [];
  for (let i = 0; i < str.length; i++) {
    if (chars.find(c => c.char === str[i]) || chars.length < k) {
      length++;
      chars = chars.filter(c => c.char !== str[i]);
      chars.push({ char: str[i], index: i });
    } else {
      if (length > maxLength) {
        maxLength = length;
      }
      chars.push({ char: str[i], index: i });
      [charToDelete, ...chars] = chars;
      length = i - charToDelete.index;
    }
    if (i === str.length - 1 && length > maxLength) {
      maxLength = length;
    }
  }
  return maxLength;
}

let start = new Date().getTime();
let res = search('abbcca', 3);
let end = new Date().getTime();
console.log('Result:', res, `execution time: ${end - start}`);

start = new Date().getTime();
res = search('abbcaccca', 2);
end = new Date().getTime();
console.log('Result:', res, `execution time: ${end - start}`);

start = new Date().getTime();
res = search('asd', 4);
end = new Date().getTime();
console.log('Result:', res, `execution time: ${end - start}`);

start = new Date().getTime();
res = search('abababbababaj', 1);
end = new Date().getTime();
console.log('Result:', res, `execution time: ${end - start}`);

start = new Date().getTime();
res = search('abababbababajjjjjj', 2);
end = new Date().getTime();
console.log('Result:', res, `execution time: ${end - start}`);