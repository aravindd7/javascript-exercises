// Asked by Stripe

// Given an array of integers, find the first missing positive integer in linear time and constant space.
// In other words, find the lowest positive integer that does not exist in the array. The array can contain
// duplicates and negative numbers as well.
// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
// You can modify the input array in-place.

// O(n)
const find = (arr) => {
  let dict = {};
  arr.forEach(a => dict[a] = true);
  const dictArr = Object.keys(dict);
  for (let i = 0; i < Object.keys(dict).length; i++) {
    if (+dictArr[i] + 1 !== +dictArr[i + 1]) {
      return +dictArr[i] + 1;
    }
  }

  return -1;
}

const n = 1000;
const random = Math.floor(Math.random() * n);
const arr = [...Array(n)].map((e, i) => i === random ? -1 : i);

// console.log(arr);

let start = new Date().getTime();
let res = find([3, 4, -1, 1]);
let end = new Date().getTime();
console.log('Result:', res, `execution time: ${end - start}`);

start = new Date().getTime();
res = find([1, 2, 0]);
end = new Date().getTime();
console.log('Result:', res, `execution time: ${end - start}`);

start = new Date().getTime();
res = find(arr);
end = new Date().getTime();
console.log('Result:', res, `execution time: ${end - start}`);