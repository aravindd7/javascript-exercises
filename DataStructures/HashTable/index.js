// In computing, a hash table (hash map) is a data structure which implements an associative array abstract
// data type, a structure that can map keys to values. A hash table uses a hash function to compute an index
// into an array of buckets or slots, from which the desired value can be found.


const LinkedList = require('../LinkedList');


class HashTable {
  constructor(hashTableSize = 4) {
    this.buckets = Array(hashTableSize).fill(null).map(() =>
      new LinkedList((a, b) => a.key === b.key)
    );
  }

  toString(callback) {
    return this.buckets.map((b, i) => i + ': ' + b.toString(callback)).join('\n');
  }

  hash(key) {
    const hash = Array.from(`${key}`).reduce((sum, char) => (sum + char.charCodeAt(0)), 0);
    return hash % this.buckets.length;
  }

  set(key, value) {
    const bucket = this.buckets[this.hash(key)];
    const node = bucket.find({ key });
    if (node) {
      node.value = value;
    } else {
      bucket.append({ key, value });
    }
  }

  delete(key) {
    const bucket = this.buckets[this.hash(key)];
    const node = bucket.find({ key });
    if (node) {
      return bucket.delete(node);
    }
    return null;
  }

  get(key) {
    const bucket = this.buckets[this.hash(key)];
    return bucket.find({ key }) || undefined;
  }

  has(key) {
    return this.get(key) !== undefined;
  }
}


const start = new Date().getTime();

const ht = new HashTable();
console.log(ht);
ht.set(888, 'LOL');
console.log(ht.toString(a => a.key + ':' + a.value));
ht.set(999, 'ABBA');
console.log(ht.toString(a => a.key + ':' + a.value));
ht.set(123, 'sdf');
console.log(ht.toString(a => a.key + ':' + a.value));
ht.set(888, 'LOLZZZ');
console.log(ht.get(888));
console.log(ht.get(876));
console.log(ht.toString(a => a.key + ':' + a.value));
ht.set(444, 'WHAT?');
console.log(ht.toString(a => a.key + ':' + a.value));
ht.set('freezy1', 'TOTO');
console.log(ht.toString(a => a.key + ':' + a.value));
console.log(ht.delete(876));
console.log(ht.delete(888));
console.log(ht.toString(a => a.key + ':' + a.value));
console.log(ht.delete(444));
console.log(ht.toString(a => a.key + ':' + a.value));
console.log('has', ht.has(123));
console.log('has', ht.has(1234));

const end = new Date().getTime();
console.log('Execution time: ' + end - start);