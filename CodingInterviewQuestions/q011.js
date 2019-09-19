// Asked by Amazon

// Given a string matrix with positive and negative integers, sorted by column and by row:
// [-3, -2, -1]
// [-1, -1,  1]
// [ 1,  2, 11]
// Need to find count of negative numbers (In ex: 4)

// O(n*n)
const count1 = (arr) => {
  let counter = 0;
  let y = 0;
  let xMax = arr.length;
  let yMax = arr.length;

  while (y < yMax) {
    subArray = arr[y];
    let x = 0;
    while (x < xMax) {
      if (subArray[x] < 0) {
        counter++;
      } else {
        xMax = x;
        break;
      }
      x++;
    }

    y++;
  }

  return counter;
}

// O(n)
const count2 = (arr) => {
  let counter = 0;
  let y = 0;
  let x = arr.length - 1;

  while (y <= arr.length - 1 && x >= 0) {
    if (arr[y][x] >= 0) {
      x--;
    } else {
      y++;
      counter += x + 1;
    }
  }

  return counter;
}

let start = new Date().getTime();
let res = count1([
  [-4, -2, -1, -1, 0],
  [-3, -1, 1, 1, 2],
  [-2, -1, 1, 2, 4],
  [1, 2, 8, 9, 10],
  [2, 3, 11, 12, 13]
]);
let end = new Date().getTime();
console.log('Result:', res, `execution time: ${end - start}`);

start = new Date().getTime();
res = count2([
  [-4, -2, -1, -1, 0],
  [-3, -1, 1, 1, 2],
  [-2, -1, 1, 2, 4],
  [1, 2, 8, 9, 10],
  [2, 3, 11, 12, 13]
]);
end = new Date().getTime();
console.log('Result:', res, `execution time: ${end - start}`);

start = new Date().getTime();
res = count1([
  [-6, -5, -4, -2, -1, -1, 0],
  [-4, -4, -3, -1, 1, 1, 2],
  [-2, -1, -1, -1, 1, 2, 4],
  [-1, 1, 1, 2, 8, 9, 10],
  [-1, 1, 2, 3, 11, 12, 13],
  [-1, 1, 2, 5, 11, 13, 14],
  [0, 1, 2, 6, 12, 13, 15]
]);
end = new Date().getTime();
console.log('Result:', res, `execution time: ${end - start}`);

start = new Date().getTime();
res = count2([
  [-6, -5, -4, -2, -1, -1, 0],
  [-4, -4, -3, -1, 1, 1, 2],
  [-2, -1, -1, -1, 1, 2, 4],
  [-1, 1, 1, 2, 8, 9, 10],
  [-1, 1, 2, 3, 11, 12, 13],
  [-1, 1, 2, 5, 11, 13, 14],
  [0, 1, 2, 6, 12, 13, 15]
]);
end = new Date().getTime();
console.log('Result:', res, `execution time: ${end - start}`);