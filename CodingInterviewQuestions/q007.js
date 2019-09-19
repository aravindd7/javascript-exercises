// Asked by Uber

// Given an array of integers, return a new array such that each element at index i 
// of the new array is the product of all the numbers in the original array except 
// the one at i.
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be 
// [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would 
// be [2, 3, 6].
// Follow-up: what if you can't use division?

// O(n)
const func1 = (arr) => {
  const m = arr.reduce((acc, a) => acc * a, 1);
  arr.forEach((a, i) => arr[i] = m / a);

  return arr;
}

// O(n)
const func2 = (arr) => {
  const result = [];
  let memory = 1;
  for (let i = 0; i <= arr.length - 1; i++) {
    result[i] = memory;
    memory = memory * arr[i];
  };
  memory = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] = result[i] * memory;
    memory = memory * arr[i];
  };

  return result;
}

const n = 10000000;
const random = Math.floor(Math.random() * n);
const arr = [...Array(n)].map(e => Math.floor(Math.random() * n) + 1);

// console.log(arr);

let start = new Date().getTime();
let res = func1([1, 2, 3, 4, 5]);
let end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);

start = new Date().getTime();
res = func2([1, 2, 3, 4, 5]);
end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);

start = new Date().getTime();
res = func1(arr);
end = new Date().getTime();
console.log(`Result: -, execution time: ${end - start}`);

start = new Date().getTime();
res = func2(arr);
end = new Date().getTime();
console.log(`Result: -, execution time: ${end - start}`);