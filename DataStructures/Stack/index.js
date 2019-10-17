// In computer science, a stack is an abstract data type that serves as a collection of elements, with two 
// principal operations:
//   - push, which adds an element to the collection, and
//   - pop, which removes the most recently added element that was not yet removed.
// The order in which elements come off a stack gives rise to its alternative name, LIFO (last in, first out). 
// Additionally, a peek operation may give access to the top without modifying the stack.


const LinkedList = require('../LinkedList');


class Stack {
  constructor(comparator) {
    this.stack = new LinkedList(comparator);
  }

  toString(callback) {
    return this.stack.toString(callback);
  }

  push(value) {
    this.stack.prepend(value);
  }

  pop() {
    return this.stack.deleteHead();
  }

  peek() {
    if (this.stack.head) {
      return this.stack.head.value;
    }
    return undefined;
  }
}

const q = new Stack();
console.log(q);
q.push('LOL');
console.log(q.toString());
q.push('ROFL');
console.log(q.toString());
q.push('BADAMS');
q.push('KUKU');
q.push('FOO');
console.log(q.toString());
console.log('dequeue', q.pop());
console.log('dequeue', q.pop());
console.log(q.toString());
console.log('peek', q.peek());
console.log(q.toString());


// functional way and using array 
const createStack = () => {
  let items = [];
  const push = (item) => {
    items.push(item);
  };
  const pop = () => {
    const item = items.splice(items.length - 1, 1);
    return item[0];
  };
  const peek = () => {
    return items[items.length - 1];
  };
  return { items, push, pop, peek };
}