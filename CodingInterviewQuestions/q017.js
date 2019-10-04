// Asked by Snapchat

// Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number
// of rooms required.
// For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.

const search = (arr) => {
  let result = {};
  for (let i = 0; i <= arr.length - 1; i++) {
    const a = arr[i];
    for (let j = a.start; j < a.end; j += 5) {
      result[j] = result[j] ? result[j] + 1 : 1;
    }
  }

  return Math.max(...Object.values(result));
}

let start = new Date().getTime();
let res = search([
  { start: 30, end: 75 },
  { start: 0, end: 50 },
  { start: 60, end: 150 },
]);
let end = new Date().getTime();
console.log('Result1:', res, `execution time: ${end - start}`);