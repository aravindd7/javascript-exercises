// For given 2 arrays find pairs (one from arr1 and one from arr2)
// that gives sum = 16

const countPairs = (arr1, arr2, sum) => {
  const arr1s = arr1.sort((a, b) => a < b ? -1 : 1);
  const arr2s = arr2.sort((a, b) => a < b ? -1 : 1);
  console.log(arr1s, arr2s);

  let i1 = 0;
  let i2 = arr2s.length - 1;
  let counter = 0;

  while (i1 <= arr1s.length - 1 && i2 >= 0) {
    const currentSum = arr1s[i1] + arr2s[i2];
    console.log(i1, i2, currentSum);
    if (currentSum > sum) {
      i2--;
    } else if (currentSum < sum) {
      i1++;
    } else {
      counter++;
      i1++;
    }
  }

  return counter;
}

let start = new Date().getTime();
let res = countPairs([5, 3, 9, 7], [3, 6, 4, 1], 8);
let end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);

start = new Date().getTime();
res = countPairs([5, 3, 9, 7, 5, 6, 2, 10, 11, 24, 12, 66, 3, 5, 6, 3, 12, 13], [5, 3, 9, 7, 5, 6, 2, 10, 11, 24, 12, 66, 3, 5, 6, 3, 12, 13], 9);
end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);