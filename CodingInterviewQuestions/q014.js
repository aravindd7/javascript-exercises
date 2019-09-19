// Asked by Facebook

// Дана матрица содержащая только 0 и 1, строки внутри отсортированы, но столбцы - нет.
// Найти индекс первого столбца содержащего хоть одну единицу. 
// Пример:
// 0 0 0 0 0 0 
// 0 0 0 0 1 1
// 0 0 0 0 1 1
// 0 1 1 1 1 1
// 0 0 1 1 1 1
// 0 0 0 0 1 1
// Ответ должен быть: 1.

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

// O(nlogn)
const findPosition = (array) => {
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

// console.log('result:', findPosition([1, 1, 1, 1, 1]));
// console.log('result:', findPosition([0, 1, 1, 1, 1]));
// console.log('result:', findPosition([0, 0, 1, 1, 1]));
// console.log('result:', findPosition([0, 0, 0, 1, 1]));
// console.log('result:', findPosition([0, 0, 0, 0, 1]));
// console.log('result:', findPosition([0, 0, 0, 0, 0]));

const find3 = (arr) => {
  let minPosition = -1;
  for (let y = 0; y <= arr.length - 1; y++) {
    const position = findPosition(arr[y]);
    if (position >= 0 && (minPosition < 0 || position < minPosition)) {
      minPosition = position;
    }
  }
  return minPosition;
}

const n = 10000;
const random = Math.floor(Math.random() * n);
const arr = [...Array(n)].map(e => {
  return [...Array(n)].map((e, i) => i < random ? 0 : 1);
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