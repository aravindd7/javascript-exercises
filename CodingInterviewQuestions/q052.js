// Asked by Google

// Find the minimum number of coins required to make n cents.
// You can use standard American denominations, that is, 1¢, 5¢, 10¢, and 25¢.
// For example, given n = 16, return 3 since we can make it with a 10¢, a 5¢, and a 1¢.

const count = (n) => {
  const coins = [];
  while (n > 0) {
    if (n >= 25) {
      n -= 25;
      coins.push(25);
    } else if (n >= 10) {
      n -= 10;
      coins.push(10);
    } else if (n >= 5) {
      n -= 5;
      coins.push(5);
    } else if (n >= 1) {
      n -= 1;
      coins.push(1);
    }
  }
  return coins.length;
};

console.log(0, count(0));
console.log(1, count(1));
console.log(1, count(10));
console.log(1, count(25));
console.log(3, count(16));
console.log(4, count(76));
console.log(4, count(37));
console.log(5, count(53));
console.log(6, count(39));