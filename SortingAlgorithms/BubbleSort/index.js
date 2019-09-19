// Bubble Sort
// Time Complexity: O(n*n)
// Space: O(1)
const sort = (arr) => {
  for (let j = arr.length - 1; j >= 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}

let start = new Date().getTime();
let res = sort([5, 3, 2, 4, 1, 6, 9, 8, 7]);
let end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);