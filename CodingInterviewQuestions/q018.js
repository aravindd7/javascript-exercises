// Asked by Airbnb

// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 
// or negative.
// For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we 
// pick 5 and 5.

// Follow-up: Can you do this in O(N) time and constant space?

const getSumOfNonAdjacentNumbers1 = (arr) => {
  if (arr.length === 0) {
    return 0;
  } else if (arr.length === 1) {
    return arr[0];
  } else if (arr.length === 2) {
    return Math.max(arr[0], arr[1]);
  }

  const [first, second, third, ...restArr] = arr;
  const sum1 = getSumOfNonAdjacentNumbers1([third, ...restArr]);
  const sum2 = getSumOfNonAdjacentNumbers1(restArr);

  let max = Math.max(first, second, first + sum1, second + sum2);
  if (restArr.length) {
    max = Math.max(max, sum1, sum2);
  }

  return max;
}

// not correct for [1, 1, 2, 3, 6, 0, -3, 6, 5, 2]
// const getSumOfNonAdjacentNumbers2 = (arr) => {
//   let sum = 0;
//   let maxNumber = -Infinity;
//   let i = 0;
//   while (i < arr.length) {
//     console.log('a', i, sum);
//     let number1 = arr[i];
//     let number2 = arr[i + 1] !== undefined ? arr[i + 1] : -Infinity;
//     let number3 = arr[i + 2] > 0 ? arr[i + 2] : 0;
//     let number4 = arr[i + 3] > 0 ? arr[i + 3] : 0;
//     console.log('ab', maxNumber, number1, number2);
//     maxNumber = Math.max(maxNumber, number1, number2);
//     // [1, 1, 2, 3, 6, 0, -3, 6, 5, 2]
//     if (number1 > 0 && number1 + number3 >= number2 + number4) {
//       sum += number1;
//       i += 2;
//       console.log('b', i, sum, maxNumber);
//       continue;
//     } else if (number1 + number3 < number2 + number4) {
//       if (number2 > 0) {
//         sum += number2;
//         i += 3;
//         console.log('b', i, sum, maxNumber);
//         continue;
//       } else if (number1 > 0) {
//         sum += number1;
//         i += 2;
//         console.log('b', i, sum, maxNumber);
//         continue;
//       }
//     }
//     if (number1 <= 0 && number2 <= 0) {
//       i += 2;
//       console.log('b', i, sum, maxNumber);
//       continue;
//     }
//     if (number1 <= 0 && number2 > 0) {
//       i += 1;
//     }

//     console.log('b', i, sum, maxNumber);
//   }
//   // console.log(sum, maxNumber);

//   return sum || maxNumber;
// }

let start = new Date().getTime();
let res = getSumOfNonAdjacentNumbers1([2, 4, 6, 2, 5]);
let end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);

start = new Date().getTime();
res = getSumOfNonAdjacentNumbers1([5, 1, 1, 5]);
end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);

start = new Date().getTime();
res = getSumOfNonAdjacentNumbers1([1]);
end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);

start = new Date().getTime();
res = getSumOfNonAdjacentNumbers1([-1, -5, -6]);
end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);

start = new Date().getTime();
res = getSumOfNonAdjacentNumbers1([0, -6]);
end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);

start = new Date().getTime();
res = getSumOfNonAdjacentNumbers1([-10, -15, 1, 2, 1]);
end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);

start = new Date().getTime();
res = getSumOfNonAdjacentNumbers1([2, -1, 1, 5, 2, -2, 2, 2, 0, 3]);
end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);

start = new Date().getTime();
res = getSumOfNonAdjacentNumbers1([-2, 2, 2, -1, -3, -1, 4, 5, -1, -3]);
end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);

start = new Date().getTime();
res = getSumOfNonAdjacentNumbers1([2, -3, 2, -2, 6, -1, -1, 2, -1, 4]);
end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);

const n = 60;
const arr = [...Array(n)].map(() => Math.floor(Math.random() * n - n / 3));

// console.log(arr);

start = new Date().getTime();
res = getSumOfNonAdjacentNumbers1(arr);
end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);
