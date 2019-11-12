// Asked by Google

// Implement integer exponentiation. That is, implement the pow(x, y) function, where x and y are integers and returns
// x^y.
// Do this faster than the naive method of repeated multiplication.
// For example, pow(2, 10) should return 1024.

const pow = (x, y) => {
  if (y === 0) {
    return 1;
  } else if (y === 1) {
    return x;
  } else if (y % 2 === 0) {
    count++;
    const p = pow(x, y / 2);
    return p * p;
  }
  count++;
  const p = pow(x, (y - 1) / 2);
  return p * p * x;
}

let count = 0;
console.log(27, pow(3, 3), 'multiplications count:', count);
count = 0;
console.log(1024, pow(2, 10), 'multiplications count:', count);
count = 0;
console.log(1048576, pow(2, 20), 'multiplications count:', count);
count = 0;
console.log(1073741824, pow(2, 30), 'multiplications count:', count);
count = 0;
console.log(pow(2, 500), 'multiplications count:', count);