// Merge Sort
// Time Complexity: O(nlogn)
// Space: O(n)
const sort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }

  const arr1 = sort(arr.slice(0, Math.floor(arr.length / 2)));
  const arr2 = sort(arr.slice(Math.floor(arr.length / 2), arr.length));

  let i = 0, j = 0;
  let res = [];
  while (i < arr1.length || j < arr2.length) {
    if (!arr2[j] || arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  return res;
}

let start = new Date().getTime();
let res = sort([5, 3, 2, 4, 1, 6, 9, 8, 7]);
let end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);