// Asked by Snapchat

// Given a list of possibly overlapping intervals, return a new list of intervals where all overlapping intervals have
// been merged. The input list is not necessarily ordered in any way.
// For example, given [(1, 3), (5, 8), (4, 10), (20, 25)], you should return [(1, 3), (4, 10), (20, 25)].

const overlap = (pairs) => {
  let bits = {};
  for (pair of pairs) {
    const start = pair[0], end = pair[1];
    for (let i = start; i <= end; i++) {
      bits[i] = 1;
    }
  }
  const bitsArray = Object.keys(bits);

  let result = [];
  let currentBegin = bitsArray[0];
  for (let i = 1; i < bitsArray.length; i++) {
    if (i === bitsArray.length - 1) {
      result.push([currentBegin, bitsArray[i]]);
    } else if (bitsArray[i] - bitsArray[i - 1] > 1) {
      result.push([currentBegin, bitsArray[i - 1]]);
      currentBegin = bitsArray[i];
    }
  }

  return result;
}

console.log(overlap([[1, 3], [5, 8], [4, 10], [20, 25]]));
console.log(overlap([[1, 30], [5, 8], [4, 10], [20, 25]]));