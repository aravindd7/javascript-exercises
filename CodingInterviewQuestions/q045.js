// Asked by Facebook

// You have a large array with most of the elements as zero.
// Use a more space-efficient data structure, SparseArray, that implements the same interface:
// init(arr, size): initialize with the original large array and size.
// set(i, val): updates index at i with val.
// get(i): gets the value at index i.

class SparseArray {
  constructor() {
    this.values = {};
    this.size = 0;
  }

  init(arr, size) {
    for (const [index, value] of arr.entries()) {
      if (value !== 0) {
        this.values[index] = value;
      }
    }
    this.size = size;
  }

  set(i, val) {
    if (val === 0) {
      delete this.values[i];
    } else {
      this.values[i] = val;
    }
  }

  get(i) {
    if (i + 1 > this.size) {
      return undefined;
    }
    return this.values[i] || 0;
  }
}

const a = new SparseArray();

a.init([0, 9, 7, 0, 0, 0, 0, 0, 1, 0], 10);

console.log(1, a);

console.log(2, a.get(0));
console.log(2, a.get(1));
console.log(2, a.get(8));
console.log(2, a.get(9));
console.log(2, a.get(10));

a.set(0, 55);
console.log(3, a);
a.set(0, 0);
console.log(3, a);

a.set(4, 55);
console.log(3, a);
a.set(4, 0);
console.log(3, a);

