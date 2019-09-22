// Asked by Facebook

// Given matrix n*n, that contains only 0 and 1. It is sorted row-wise, like 0 0 0 1 1, but nort sorted column-wise.
// Need to find index of first column containing 1.
// Example:
// 0 0 0 0 0 0 
// 0 0 0 0 1 1
// 0 0 0 0 1 1
// 0 1 1 1 1 1
// 0 0 1 1 1 1
// 0 0 0 0 1 1
// The answer should be: 1.

// O(n*n)
const find1 = (arr) => {
  for (let x = 0; x <= arr.length - 1; x++) {
    for (let y = 0; y <= arr.length - 1; y++) {
      // console.log(arr[y][x]);
      if (arr[y][x] === 1) {
        return x;
      }
    }
  }
  return -1;
}

// O(?)
const find2 = (arr) => {
  let minPosition = -1;
  for (let y = 0; y <= arr.length - 1; y++) {
    const position = arr[y].indexOf(1);
    if (position >= 0 && (minPosition < 0 || position < minPosition)) {
      minPosition = position;
    }
  }
  return minPosition;
}

// O(logn)
const findPosition1 = (array) => {
  if (array[0] === 1) {
    return 0;
  }
  if (array[array.length - 1] === 0) {
    return -1;
  }
  let i = 0, j = array.length - 1;
  while (i !== j) {
    const middleIndex = Math.floor((i + j) / 2);
    const value = array[middleIndex];
    const nextValue = array[middleIndex + 1];
    if (value === 0 && nextValue === 1) {
      return middleIndex + 1;
    }
    if (value === 0) {
      i = middleIndex;
    } else {
      j = middleIndex;
    }
  }

  return -1;
}

// console.log('result:', findPosition1([1, 1, 1, 1, 1]));
// console.log('result:', findPosition1([0, 1, 1, 1, 1]));
// console.log('result:', findPosition1([0, 0, 1, 1, 1]));
// console.log('result:', findPosition1([0, 0, 0, 1, 1]));
// console.log('result:', findPosition1([0, 0, 0, 0, 1]));
// console.log('result:', findPosition1([0, 0, 0, 0, 0]));

// O(nlogn)
const find3 = (arr) => {
  let minPosition = -1;
  for (let y = 0; y <= arr.length - 1; y++) {
    const position = findPosition1(arr[y]);
    if (position >= 0 && (minPosition < 0 || position < minPosition)) {
      minPosition = position;
    }
  }
  return minPosition;
}

const findPosition2 = (array, maxPosition) => {
  if (array[0] === 1) {
    return 0;
  }
  if (array[maxPosition] === 0) {
    return -1;
  }
  let i = 0, j = maxPosition;
  while (i !== j) {
    const middlePosition = Math.floor((i + j) / 2);
    if (array[middlePosition] === 0 && array[middlePosition + 1] === 1) {
      return middlePosition + 1;
    }
    if (array[middlePosition] === 0) {
      i = middlePosition;
    } else if (array[middlePosition] === 1) {
      j = middlePosition;
    }
  }
  return -1;
}

// console.log('result:', findPosition2([1, 1, 1, 1, 1], 3));
// console.log('result:', findPosition2([0, 1, 1, 1, 1], 3));
// console.log('result:', findPosition2([0, 0, 1, 1, 1], 3));
// console.log('result:', findPosition2([0, 0, 0, 1, 1], 3));
// console.log('result:', findPosition2([0, 0, 0, 0, 1], 3));
// console.log('result:', findPosition2([0, 0, 0, 0, 0], 3));

// O(nlogn)
const find4 = (arr) => {
  let minPosition = -1;
  for (let i = 0; i < arr.length; i++) {
    const position = findPosition2(arr[i], minPosition > 0 ? minPosition : arr[i].length - 1);
    if (position > 0 && (minPosition === -1 || position < minPosition)) {
      minPosition = position;
    }
    if (minPosition === 0) {
      return minPosition;
    }
  }
  return minPosition;
}

const n = 10000;
const random1 = Math.floor(Math.random() * n);
const arr = [...Array(n)].map(e => {
  const random2 = Math.floor(Math.random() * n);
  return [...Array(n)].map((e, i) => i > random1 && i > random2 ? 1 : 0);
});

// console.log(arr);

let start = new Date().getTime();
let res = find1(arr);
let end = new Date().getTime();
console.log('Result:', res, `execution time: ${end - start}`);

start = new Date().getTime();
res = find2(arr);
end = new Date().getTime();
console.log('Result:', res, `execution time: ${end - start}`);

start = new Date().getTime();
res = find3(arr);
end = new Date().getTime();
console.log('Result:', res, `execution time: ${end - start}`);

start = new Date().getTime();
res = find4(arr);
end = new Date().getTime();
console.log('Result:', res, `execution time: ${end - start}`);