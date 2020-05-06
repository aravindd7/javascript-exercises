// Asked by Facebook

// Given an array of numbers of length N, find both the minimum and maximum using less than 2 * (N - 2) comparisons.

const createComparator = () => {
  let count = 0;

  const getCount = () => count;

  const compare = (a, b) => {
    count++;
    return a >= b;
  }

  return { getCount, compare };
}

const findMaxAndMin = (arr) => {
  const comparator = createComparator();
  let min = arr[0], max = arr[0];
  for (a of arr.slice(1)) {
    if (comparator.compare(min, a)) {
      min = a;
    } else if (comparator.compare(a, max)) {
      max = a;
    }
  }

  console.log('compares limit:', (arr.length - 2) * 2, 'compares:', comparator.getCount());

  return { min, max };
}

console.log({ min: 2, max: 9 }, findMaxAndMin([5, 3, 4, 2, 9, 8, 7, 2, 4, 4, 4]));
console.log({ min: -2, max: 9 }, findMaxAndMin([5, 3, 4, 2, 9, 8, -2]));
console.log({ min: 1, max: 1 }, findMaxAndMin([1, 1, 1, 1]));
console.log({ min: 1, max: 1 }, findMaxAndMin([1, 1, 1]));
console.log({ min: 1, max: 11 }, findMaxAndMin([1, 1, 1, 1, 1, 1, 1, 1, 11, 11, 1, 1])); \
