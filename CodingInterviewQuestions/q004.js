// Asked by Amazon

// There's a staircase with N steps, and you can climb 1 or 2 steps at a time. 
// Given N, write a function that returns the number of unique ways you can climb 
// the staircase. The order of the steps matters.
//For example, if N is 4, then there are 5 unique ways:
// 1, 1, 1, 1
// 2, 1, 1
// 1, 2, 1
// 1, 1, 2
// 2, 2
// What if, instead of being able to climb 1 or 2 steps at a time, you could climb 
// any number from a set of positive integers X? For example, if X = {1, 3, 5}, 
// you could climb 1, 3, or 5 steps at a time. Generalize your function to take in X.

const able = [1, 2];
const cache = {};
const countSteps = (stepsLeft) => {
  if (cache[stepsLeft]) {
    return cache[stepsLeft];
  }
  if (stepsLeft <= 0) {
    return 0;
  }
  let result = able.includes(stepsLeft) ? 1 : 0;
  able.forEach(a => result += countSteps(stepsLeft - a));
  // console.log(stepsLeft, result);
  cache[stepsLeft] = result;

  return result;
}

let start = new Date().getTime();
let res = countSteps(4);
let end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);

start = new Date().getTime();
res = countSteps(100);
end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);