// Asked by Facebook.

// There is an N by M matrix of zeroes. Given N and M, write a function to count the number of ways of starting at the
// top-left corner and getting to the bottom-right corner. You can only move right or down.
// For example, given a 2 by 2 matrix, you should return 2, since there are two ways to get to the bottom-right:
// Right, then down
// Down, then right
// Given a 5 by 5 matrix, there are 70 ways to get to the bottom-right.

const count = (X, Y, x, y) => {
  x = x || 1;
  y = y || 1;
  if (x === X && y === Y) {
    return 1;
  }
  if (x === X) {
    return count(X, Y, x, y + 1);
  }
  if (y === Y) {
    return count(X, Y, x + 1, y);
  }
  return count(X, Y, x, y + 1) + count(X, Y, x + 1, y);
}

console.log(1, count(1, 1));
console.log(1, count(1, 10));
console.log(2, count(2, 2));
console.log(3, count(2, 3));
console.log(3, count(3, 2));
console.log(6, count(3, 3));
console.log(70, count(5, 5));