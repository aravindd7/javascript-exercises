// Given a list of numbers and a number k, return whether any two numbers from 
// the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?

const cache = {};
const containsPair = (arr, sum) => {
  let result = false;
  let i = 0;
  while (!result && i < arr.length - 1) {
    const first = arr[i];
    const second = sum - first;
    if (cache[second.toString()]) {
      return true;
    }
    cache[first] = true;
    i++;
  };
  return false;
}

let start = new Date().getTime();
let res = containsPair([1, 2, 5, 6, 3, 5], 10);
let end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);