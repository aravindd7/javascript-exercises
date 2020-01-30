// Asked by Google

// Implement an LRU (Least Recently Used) cache. It should be able to be initialized with a cache size n, and contain
// the following methods:
// set(key, value): sets key to value. If there are already n items in the cache and we are adding a new item, then it
// should also remove the least recently used item.
// get(key): gets the value at key. If no such key exists, return null.
// Each operation should run in O(1) time.

class Node {
  constructor(key, value) {
    this.next = null;
    this.prev = null;
    this.key = key;
    this.value = value;
  }
}

class LRUCache {
  constructor(size) {
    this.size = size;
    this.head = null;
    this.tail = null;
    this.map = {};
  }

  moveNodeToHead(node) {
    if (node.prev) {
      node.prev.next = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    }
    if (this.tail == node) {
      this.tail = node.prev;
    }
    node.next = this.head;
    node.prev = null;
    this.head.prev = node;
    this.head = node;
  }

  set(key, value) {
    const newNode = new Node(key, value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.map[key] = newNode;
    } else if (this.map[key]) {
      const node = this.map[key];
      node.value = value;
      this.moveNodeToHead(node);
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.map[key] = newNode;
    }

    // removing tail
    if (Object.keys(this.map).length > this.size) {
      delete (this.map[this.tail.key]);
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }

  get(key) {
    if (!this.map[key]) {
      return null;
    }
    const node = this.map[key];
    this.moveNodeToHead(node);

    return this.map[key].value;
  }
}

const c = new LRUCache(5);
c.set(111, 'a');
// console.log(c);
c.set(222, 'b');
// console.log(c);
c.set(333, 'c');
// console.log(c);
c.set(444, 'd');
// console.log(c);
c.set(111, 'aa');
// console.log(c);
c.set(555, 'e');
// console.log(c);
c.set(666, 'f');
console.log(c);
console.log(c.get(111));
console.log(c.get(222));
console.log(c);