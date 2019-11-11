// Asked by Amazon

// An sorted array of integers was rotated an unknown number of times.
// Given such an array, find the index of the element in the array in faster than linear time. If the element doesn't
// exist in the array, return null.
// For example, given the array [13, 18, 25, 2, 8, 10] and the element 8, return 4 (the index of 8 in the array).
// You can assume all the integers in the array are unique.

const findIndexRotated = (arr, number) => {
  if (arr[0] === number) {
    return 0;
  }
  const isUp = arr[0] < number;
  let i = isUp ? 0 : arr.length - 1;
  while (true) {
    if (arr[i] === number) {
      return i;
    }
    if (isUp && arr[i] > number || !isUp && arr[i] < number) {
      return null;
    }
    i += isUp ? 1 : -1;
  }
}

console.log(5, findIndexRotated([13, 18, 25, 1, 2, 8, 10], 8));
console.log(1, findIndexRotated([13, 18, 25, 1, 2, 8, 10], 18));
console.log(0, findIndexRotated([13, 18, 25, 1, 2, 8, 10], 13));
console.log(3, findIndexRotated([13, 18, 25, 1, 2, 8, 10], 1));
console.log(6, findIndexRotated([13, 18, 25, 1, 2, 8, 10], 10));

const findIndexRotated2 = (arr, number) => {
  const first = arr[0];
  let i = 0, j = arr.length - 1;
  if (arr[0] === number) {
    return i;
  }
  if (arr[j] === number) {
    return j;
  }
  while (i !== j) {
    const middleIndex = Math.floor((i + j) / 2);
    const value = arr[middleIndex];
    if (value === number) {
      return middleIndex;
    } else if (value > first) {
      if (number >= first) {
        if (number > value) {
          i = middleIndex;
        } else {
          j = middleIndex;
        }
      } else {
        i = middleIndex;
      }
    } else {
      if (number >= first) {
        j = middleIndex;
      } else {
        if (number > value) {
          i = middleIndex;
        } else {
          j = middleIndex;
        }
      }
    }
  }

  return null;
}

console.log(5, findIndexRotated2([13, 18, 25, 1, 2, 8, 10], 8));
console.log(1, findIndexRotated2([13, 18, 25, 1, 2, 8, 10], 18));
console.log(0, findIndexRotated2([13, 18, 25, 1, 2, 8, 10], 13));
console.log(3, findIndexRotated2([13, 18, 25, 1, 2, 8, 10], 1));
console.log(6, findIndexRotated2([13, 18, 25, 1, 2, 8, 10], 10));