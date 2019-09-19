// For given set of posititve integers arr = [2, 4, 6, 10]
// need to count of possible subsets that gives sum = 16

const countSets = (arr, sum) => {
  return count(arr, sum, arr.length - 1);
}

const count = (arr, sum, i) => {
  if (sum === 0) {
    return 1;
  } else if (sum < 0) {
    return 0;
  } else if (i < 0) {
    return 0;
  } else {
    // console.log('splitting: ', arr.slice(0, i - 1 + 1), sum - arr[i], '&', arr.slice(0, i - 1 + 1), sum);
    return count(arr, sum - arr[i], i - 1) + count(arr, sum, i - 1);
  }
}

let start = new Date().getTime();
let res = countSets([2, 4, 6, 10], 10);
let end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);

start = new Date().getTime();
res = countSets([3, 1, 5, 2, 8, 7, 4, 6, 51, 22, 83, 73, 44, 65, 99, 31, 12, 53, 24, 85, 76, 47, 61, 91], 100);
end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);