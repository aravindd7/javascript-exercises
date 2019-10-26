// Asked by Google

// We can determine how "out of order" an array A is by counting the number of inversions it has. Two elements A[i]
// and A[j] form an inversion if A[i] > A[j] but i < j. That is, a smaller element appears after a larger element.
// Given an array, count the number of inversions it has. Do this faster than O(N^2) time.
// You may assume each element in the array is distinct.
// For example, a sorted list has zero inversions. The array [2, 4, 1, 3, 5] has three inversions: (2, 1), (4, 1),
// and (4, 3). The array [5, 4, 3, 2, 1] has ten inversions: every distinct pair forms an inversion.


const countInversions = (arr) => {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        result++;
      }
    }
  }

  return result;
}

console.log(1, countInversions([1, 2, 4, 3, 5]));
console.log(3, countInversions([2, 4, 1, 3, 5]));
console.log(10, countInversions([5, 4, 3, 2, 1]));
console.log(7, countInversions([5, 2, 3, 4, 1]));