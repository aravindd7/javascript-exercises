const LinkedList = require('../LinkedList');


class Queue {
  constructor(comparator) {
    this.queue = new LinkedList(comparator);
  }

  toString(callback) {
    return this.queue.toString(callback);
  }

  enqueue(value) {
    this.queue.append(value);
  }

  dequeue() {
    return this.queue.deleteHead();
  }

  peek() {
    if (this.queue.head) {
      return this.queue.head.value;
    }
    return undefined;
  }
}

const q = new Queue();
console.log(q);
q.enqueue('LOL');
console.log(q.toString());
q.enqueue('ROFL');
console.log(q.toString());
q.enqueue('BADAMS');
q.enqueue('KUKU');
q.enqueue('FOO');
console.log(q.toString());
console.log('dequeue', q.dequeue());
console.log('dequeue', q.dequeue());
console.log(q.toString());
console.log('peek', q.peek());
console.log(q.toString());