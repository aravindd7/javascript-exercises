// Asked by Amazon

// Given an array and a number k that's smaller than the length of the array, rotate the array to the right k elements
// in-place.

// APPROACH 1
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

// APPROACH 2
const rotate2 = (arr, k) => {
  const reverse = (arr, i, j) => {
    while (i < j) {
      arr[i] += arr[j];
      arr[j] = -(arr[j] - arr[i]);
      arr[i] -= arr[j];
      i++;
      j--;
    }

    return arr;
  }

  reverse(arr, 0, arr.length - k - 1);
  reverse(arr, arr.length - k, arr.length - 1);
  reverse(arr, 0, arr.length - 1);

  return arr;
}

console.log([8, 9, 1, 2, 3, 4, 5, 6, 7].join(','), rotate([1, 2, 3, 4, 5, 6, 7, 8, 9], 2).join(','));
console.log([8, 9, 1, 2, 3, 4, 5, 6, 7].join(','), rotate2([1, 2, 3, 4, 5, 6, 7, 8, 9], 2).join(','));
