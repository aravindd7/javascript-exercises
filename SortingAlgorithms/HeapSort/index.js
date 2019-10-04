// Heap Sort
// Time Complexity: -
// Space: -


const Heap = require('../../DataStructures/Heap');


const sort = (arr) => {
  let res = [];
  const maxHeap = new Heap((a, b) => a === b ? 0 : a < b ? -1 : 1);
  arr.forEach((a) => maxHeap.add(a));
  for (let i = 0; i < arr.length; i++) {
    res.push(maxHeap.poll());
  }

  return res;
}

let start = new Date().getTime();
let res = sort([5, 3, 2, 4, 1, 6, 9, 8, 7]);
let end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);