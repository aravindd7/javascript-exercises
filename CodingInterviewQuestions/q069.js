// Asked by Amazon

// Given an array and a number k that's smaller than the length of the array, rotate the array to the right k elements
// in-place.

const rotate = (arr, k) => {
  for (let i = 0; i < k; i++) {
    for (let i = arr.length - 1; i > 0; i--) {
      arr[i] += arr[i - 1];
      arr[i - 1] = -(arr[i - 1] - arr[i]);
      arr[i] -= arr[i - 1];
    }
  }

  return arr;
}

console.log([8, 9, 1, 2, 3, 4, 5, 6, 7].join(','), rotate([1, 2, 3, 4, 5, 6, 7, 8, 9], 2).join(','));