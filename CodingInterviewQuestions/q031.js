// Asked by Facebook

// Given a multiset of integers, return whether it can be partitioned into two subsets whose sums are the same.
// For example, given the multiset {15, 5, 20, 10, 35, 15, 10}, it would return true, since we can split it up into
// {15, 5, 10, 15, 10} and {20, 35}, which both add up to 55.
// Given the multiset {15, 5, 20, 10, 35}, it would return false, since we can't split it up into two subsets that add
// up to the same sum.

const answer = (arr) => {
  arr = arr.sort((a, b) => a < b ? -1 : 1);
  let sum = 0;
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    if (sum > 0) {
      sum -= arr[i];
      i++;
    } else {
      sum += arr[j];
      j--;
    }
  }
  return sum === 0;
}

console.log(true, answer([15, 5, 20, 10, 35, 15, 10]));
console.log(true, answer([15, 50, 20, 10, 20, 15, 10]));
console.log(true, answer([10, 1, 1, 1, 1, 4, 1, 1]));
console.log(true, answer([5, 5, 1, 1, 1, 1, 4, 1, 1]));
console.log(false, answer([4, 5, 1, 1, 1, 1, 4, 1, 1]));