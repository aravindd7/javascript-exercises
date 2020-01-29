// Asked by Microsoft

// Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the
// list so far on each new element.
// Recall that the median of an even-numbered list is the average of the two middle numbers.
// For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should print out:
// 2
// 1.5
// 2
// 3.5
// 2
// 2
// 2

addToSortedArray = (arr, x) => {
  let index = 0;
  while (arr[index] < x) {
    index++;
  }
  arr.splice(index, 0, x);

  return arr;
};

const median = (arr) => {
  let sortedNumbers = [];
  let result = [];
  for (a of arr) {
    sortedNumbers = addToSortedArray(sortedNumbers, a);
    const middleIndex = Math.trunc(sortedNumbers.length / 2);
    if (sortedNumbers.length === 1) {
      result.push(a);
    } else if (sortedNumbers.length % 2 === 1) {
      result.push(+sortedNumbers[middleIndex]);
    } else {
      result.push((+sortedNumbers[middleIndex] + +sortedNumbers[middleIndex - 1]) / 2);
    }
  }

  return result;
};

console.log(median([2, 1, 5, 7, 2, 0, 5, 9, 2, 5]));
console.log(median([1111]));
console.log(median([1, 1, 1, 1, 1]));
console.log(median([1, 2, 2, 1, 1]));