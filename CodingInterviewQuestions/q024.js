// Given number of coordinates {x, y}, need to find count of possible rectangles made of these dots.
// Assume that rectangle sides are parallel to the axis x and y.
// For example: 
// {x: 0, y: 0}
// {x: 0, y: 1}
// {x: 1, y: 0}
// {x: 1, y: 1}
// {x: 2, y: 0}
// {x: 2, y: 1}
// . . .
// . . .
// The answer is 3.

const count = (array) => {
  let count = 0;
  const pairs = {};
  for (A of array) {
    for (B of array) {
      if (A.x === B.x && A.y < B.y) {
        if (pairs[A.y + '->' + B.y]) {
          count += pairs[A.y + '->' + B.y];
        }
        pairs[A.y + '->' + B.y] = (pairs[A.y + '->' + B.y] || 0) + 1;
      }
    }
  }

  return count;
}

let start = new Date().getTime();
let res = count([
  { x: 0, y: 0 },
  { x: 0, y: 1 },
  { x: 1, y: 0 },
  { x: 1, y: 1 },
  { x: 2, y: 0 },
  { x: 2, y: 1 },
  { x: 1, y: 2 },
  { x: 2, y: 2 },
  { x: 3, y: 1 },
  { x: 3, y: 0 },
]);
let end = new Date().getTime();
console.log('Result:', res, `execution time: ${end - start}`);