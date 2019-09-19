// Quick Sort
// Time Complexity: O(nlogn)
const sort = (arr, low, high) => {
  console.log('sort', arr, low, high);
  if (low < high) {
    const pi = partition(arr, low, high);
    sort(arr, low, pi - 1);
    sort(arr, pi + 1, high);
  }
  return arr;
}

const partition = (arr, low, high) => {
  console.log('partition', arr, low, high);
  const pivot = arr[high];
  console.log('partition pivot', pivot);
  let i = (low - 1);
  console.log('partition i', i);

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  const temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;

  return i + 1;
}

let start = new Date().getTime();
let res = sort([4, 5, 2, 3], 0, 3);
// let res = sort([5, 3, 2, 4, 1, 6, 9, 8, 7], 0, 8);
let end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);