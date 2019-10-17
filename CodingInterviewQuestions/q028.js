// Asked by Google

// Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the
// Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.
// Do this in linear time and in-place.
// For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become 
// ['R', 'R', 'R', 'G', 'G', 'B', 'B'].

const rgbSort = (arr) => {

  const swap = (i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  let i = 0;
  let m = 0;
  let n = arr.length - 1;
  while (i <= n && m < n) {
    if (arr[i] === 'R') {
      swap(m, i);
      m++;
    }
    if (arr[i] === 'B') {
      swap(n, i);
      n--;
    }
    if (i < m || arr[i] === 'G') {
      i++;
    }
  }
  return arr;
}

console.log('result', rgbSort(['G', 'B', 'R', 'R', 'B', 'R', 'G']));
console.log('result', rgbSort(['B', 'G', 'B', 'R', 'R', 'G', 'B', 'B', 'R', 'R', 'B', 'R', 'G']));
console.log('result', rgbSort(['B', 'G', 'R', 'R', 'R', 'R', 'R', 'R']));