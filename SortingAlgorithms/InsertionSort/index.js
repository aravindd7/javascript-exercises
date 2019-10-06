// Insertion Sort
// Time Complexity: O(n*n)
// Space: O(1)
const sort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let j = 0;
    while (i - j >= 0 && arr[i - j] < arr[i - j - 1]) {
      const temp = arr[i - j];
      arr[i - j] = arr[i - j - 1];
      arr[i - j - 1] = temp;
      j++;
    }
  }
  return arr;
}

let start = new Date().getTime();
let res = sort([5, 3, 2, 4, 1, 6, 9, 8, 7]);
let end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);