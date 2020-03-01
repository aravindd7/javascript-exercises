// Asked by Facebook

// Given an array of integers in which two elements appear exactly once and all other elements appear exactly twice,
// find the two elements that appear only once.
// For example, given the array [2, 4, 6, 8, 10, 2, 6, 10], return 4 and 8. The order does not matter.
// Follow-up: Can you do this in linear time and constant space?

const find = (arr) => {
  const numbers = {};
  for (a of arr) {
    if (numbers[a]) {
      delete (numbers[a]);
    } else {
      numbers[a] = true;
    }
  }
  return Object.keys(numbers).map(n => +n);
}

console.log([4, 8], find([2, 4, 6, 8, 10, 2, 6, 10]));
console.log([1, 2], find([1, 3, 3, 4, 5, 4, 5, 2]));