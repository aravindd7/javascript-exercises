// Asked by Facebook

// Given a array of numbers representing the stock prices of a company in chronological order, write a function that
// calculates the maximum profit you could have made from buying and selling that stock once. You must buy before you
// can sell it.
// For example, given [9, 11, 8, 5, 7, 10], you should return 5, since you could buy the stock at 5 dollars and sell
// it at 10 dollars.

// O(n)
const find = (arr) => {
  let min = arr[0], max = arr[0], newMin = arr[0];
  for (a of arr) {
    if (a < newMin) {
      newMin = a;
    }
    if (a > max) {
      max = a;
    }
    if (max - min < a - newMin) {
      min = newMin;
      max = a;
    }
  }

  return max - min;
}

console.log(5, find([9, 11, 8, 5, 7, 10]));
console.log(10, find([1, 11, 8, 5, 7, 10]));
console.log(35, find([5, 7, 40, 1, 11, 35]));