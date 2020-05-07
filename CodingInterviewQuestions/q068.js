// Asked by Twitter

// Given a list of numbers, create an algorithm that arranges them in order to form the largest possible integer.
// For example, given [10, 7, 76, 415], you should return 77641510.

const arrange = (arr) => {
  arr = arr.sort((a, b) => {
    if (+(String(a) + String(b)) > +(String(b) + String(a))) {
      return -1;
    } else {
      return 1;
    }
  });
  return +arr.join('');
}

console.log(77641510, arrange([10, 7, 76, 415]));
console.log(1111, arrange([1, 1, 1, 1]));
console.log(111010, arrange([10, 1, 1, 10]));
console.log(121211, arrange([12, 1, 1, 12]));