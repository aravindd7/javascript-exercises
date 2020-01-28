// Asked by Amazon

// Implement a bit array.
// A bit array is a space efficient array that holds a value of 1 or 0 at each index.
// init(size): initialize the array with size
// set(i, val): updates index at i with val where val is either 1 or 0.
// get(i): gets the value at index i.

class BitArray {
  constructor() {
    this.values = {};
    this.size = 0;
  }

  init(size) {
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

const a = new BitArray();

a.init(1000000);

a.set(0, 1);
a.set(1, 1);
a.set(8, 1);
a.set(999999, 1);
a.set(10, 1);

console.log(0, a.get(2));
console.log(1, a.get(0));
console.log(1, a.get(1));
console.log(0, a.get(999998));
console.log(1, a.get(999999));
console.log(undefined, a.get(1000000));
console.log(undefined, a.get(1000001));