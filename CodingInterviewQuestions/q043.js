// Asked by Microsoft

// A number is considered perfect if its digits sum up to exactly 10.
// Given a positive integer n, return the n-th perfect number.
// For example, given 1, you should return 19. Given 2, you should return 28.

const find = (n) => {
  let currentN = 0;
  let i = 0;
  while (currentN < n) {
    i++;
    const sum = (i).toString().split('').reduce((acc, n) => acc + parseInt(n), 0);
    if (sum === 10) {
      currentN++;
    }
  }
  return i;
}

console.log(19, find(1));
console.log(28, find(2));
console.log(37, find(3));
console.log(46, find(4));
console.log(181, find(18));
console.log(30700, find(703));