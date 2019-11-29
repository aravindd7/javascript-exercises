// Asked by Facebook

// Given a list of integers, return the largest product that can be made by multiplying any three integers.
// For example, if the list is [-10, -10, 5, 2], we should return 500, since that's -10 * -10 * 5.
// You can assume the list has at least three integers.

const find = (arr) => {
  let big1 = -Infinity, big2 = -Infinity, big3 = -Infinity, low1 = +Infinity, low2 = +Infinity, low3 = +Infinity;
  for (const n of arr) {
    if (n > 0) {
      if (big1 < n) {
        big1 !== -Infinity && arr.push(big1);
        big1 = n;
      } else if (big2 < n) {
        big2 !== -Infinity && arr.push(big2);
        big2 = n;
      } else if (big3 < n) {
        big3 = n;
      }
    } else if (n < 0) {
      if (low1 > n) {
        low1 !== +Infinity && arr.push(low1);
        low1 = n;
      } else if (low2 > n) {
        low2 !== +Infinity && arr.push(low2);
        low2 = n;
      } else if (low3 > n) {
        low3 = n;
      }
    }
  }

  if (low1 === +Infinity || low2 === +Infinity) {
    return big1 * big2 * big3;
  } else if (big1 === -Infinity) {
    return low1 * low2 * low3;
  } else if (big2 === -Infinity || big3 === -Infinity) {
    return low1 * low2 * big1;
  }

  return Math.max(big1 * big2 * big3, low1 * low2 * big1);
}

console.log(500, find([-10, -10, 5, 2]));
console.log(1, find([1, 1, 1]));
console.log(2, find([1, 2, 1]));
console.log(2, find([-1, -2, 1]));
console.log(1000, find([-10, 10, 10, 10, 4, 5, 7, 6, -7, 3, 2, 5, 6]));
console.log(-8, find([-2, -2, -2]));
console.log(-80, find([-20, -2, -2]));