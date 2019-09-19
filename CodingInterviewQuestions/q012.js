// Asked by Facebook

// Given n, need to fill n * n matrix with numbers going by spiral:
// Example: n = 3
// 1 2 3
// 8 9 4
// 7 6 5

// O(n+n) = O(n)
const spiral = (n) => {
  let counter = 1;
  let result = [...Array(n)].map(e => Array(n));
  let yMin = 0, yMax = n - 1;
  let xMin = 0, xMax = n - 1;
  let x = 0, y = 0;
  let direction = 'right';
  console.log('counter yMax xMax', yMax, xMax);

  while (counter <= n * n) {
    result[y][x] = counter;
    if (direction === 'right') {
      if (x === xMax || result[y][x + 1] > 0) {
        direction = 'down';
        y++;
      } else {
        x++;
      }
    } else if (direction === 'down') {
      if (y === yMax || result[y + 1][x] > 0) {
        direction = 'left';
        x--;
      } else {
        y++;
      }
    } else if (direction === 'left') {
      if (x === 0 || result[y][x - 1] > 0) {
        direction = 'up';
        y--;
      } else {
        x--;
      }
    } else if (direction === 'up') {
      if (y === 0 || result[y - 1][x] > 0) {
        direction = 'right';
        x++;
      } else {
        y--;
      }
    }

    counter++;
  }

  return result;
}

let start = new Date().getTime();
let res = spiral(8);
let end = new Date().getTime();
console.log('Result:', res, `execution time: ${end - start}`);