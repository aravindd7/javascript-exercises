// In computer science, a linked list is a linear collection of data elements, in which linear order is not 
// given by their physical placement in memory. Instead, each element points to the next. It is a data structure 
// consisting of a group of nodes which together represent a sequence. Under the simplest form, each node is 
// composed of data and a reference (in other words, a link) to the next node in the sequence. This structure 
// allows for efficient insertion or removal of elements from any position in the sequence during iteration.

// Time Complexity
// Access    O(n)
// Search    O(n)
// Insertion O(1)
// Deletion  O(n)


class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

class LinkedList {
  constructor(comparator) {
    this.head = null;
    this.tail = null;
    this.compare = comparator || ((a, b) => a === b);
  }

  toArray() {
    const nodes = [];
    let node = this.head;
    while (node) {
      nodes.push(node);
      node = node.next;
    }
    return nodes;
  }

  toString(callback) {
    return this.toArray().map(node => node.toString(callback)).join(', ');
  }

  prepend(value) {
    const node = new LinkedListNode(value, this.head);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head = node;
    }
  }

  append(value) {
    const node = new LinkedListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  delete(value) {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    let previousNode = null;
    let deletedValue = null;
    while (node) {
      if (this.compare(node.value, value)) {
        deletedValue = node.value;
        if (previousNode) {
          previousNode.next = node.next;
        } else {
          this.head = node.next;
        }
        if (!node.next) {
          this.tail = previousNode;
        }
      } else {
        previousNode = node;
      }
      node = node.next;
    }
    return deletedValue;
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }
    const deletedValue = this.head.value;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return deletedValue;
  }

  find(value) {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (this.compare(node.value, value)) {
        return node.value;
      }
      node = node.next;
    }
    return null;
  }
}

module.exports = LinkedList;



// const ll = new LinkedList();
// console.log(1, ll, ll.compare(5, 5));
// ll.append(333);
// console.log(1, ll.toArray());
// ll.append(444);
// console.log(2, ll.toString());
// ll.append(333);
// ll.append(666);
// console.log(3, ll.toString());
// ll.prepend(111);
// ll.append(333);
// console.log(4, ll.toString(v => v + 1));
// console.log(5, ll.find(333));
// console.log(6, ll.toString());
// console.log(6, ll.delete(333));
// console.log(6, ll.toString());
// console.log(6, ll);

// const ll = new LinkedList((a, b) => a.kuku === b.kuku);
// console.log('ll:', ll.toString(a => a.kuku + ':' + a.shit));
// ll.append({ kuku: 3, shit: 20909 });
// console.log('ll:', ll.toString(a => a.kuku + ':' + a.shit));
// ll.append({ kuku: 1, shit: 789 });
// console.log('ll:', ll.toString(a => a.kuku + ':' + a.shit));
// ll.append({ kuku: 2, shit: 23423 });
// console.log('ll:', ll.toString(a => a.kuku + ':' + a.shit));
// ll.append({ kuku: 3, shit: 789 });
// console.log('ll:', ll.toString(a => a.kuku + ':' + a.shit));
// ll.append({ kuku: 4, shit: 234234 });
// console.log('ll:', ll.toString(a => a.kuku + ':' + a.shit));
// ll.append({ kuku: 3, shit: 356 });
// console.log('ll:', ll.toString(a => a.kuku + ':' + a.shit));
// console.log('find:', ll.find(2));
// console.log('find:', ll.find({ kuku: 4 }));