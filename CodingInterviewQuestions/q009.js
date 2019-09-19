// Asked by Amazon

// Given an array of coordinates { x: 2, y: 1 } and number k, find closest k 
// coordinates to the origin = { x: 0, y: 0 }

const find = (arr, k) => {
  let data = {};
  let result = [];
  arr.forEach(a => {
    const distance = a.x * a.x + a.y * a.y;
    data[distance] = [...(data[distance] || []), a];
  });
  Object.keys(data).forEach(key => {
    const arr = data[key].slice(0, k);
    k = k - arr.length;
    result = [...result, ...arr];
  });

  return result;
}

let start = new Date().getTime();
let res = find([
  { x: -1, y: 2 },
  { x: 0, y: 3 },
  { x: 2, y: 1 },
  { x: 3, y: -4 },
  { x: 1, y: 1 },
  { x: -2, y: -2 },
], 2);
let end = new Date().getTime();
console.log('Result:', res, `execution time: ${end - start}`);