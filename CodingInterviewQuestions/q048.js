// Asked by Google

// Given a sorted list of integers, square the elements and give the output in sorted order.
// For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].

const squareArray = (arr) => {
  let i = 0;
  while (arr[i] < 0 || Math.abs(arr[i]) >= Math.abs(arr[i + 1])) {
    i++;
  }

  let j = i + 1;
  let result = [];
  while (i >= 0 || j <= arr.length - 1) {
    if (Math.abs(arr[i]) <= Math.abs(arr[j]) || j > arr.length - 1) {
      result.push(arr[i] * arr[i]);
      i--;
    } else {
      result.push(arr[j] * arr[j]);
      j++;
    }
  }

  return result;
};

console.log('result', squareArray([-9, -2, 0, 2, 3]));
console.log('result', squareArray([0, 0, 0, 0, 2, 3]));
console.log('result', squareArray([-5, -2, 0, 0, 0]));
console.log('result', squareArray([0, 0, 0]));
console.log('result', squareArray([2, 2, 2, 2]));
console.log('result', squareArray([-9, -5, 1, 1, 2]));