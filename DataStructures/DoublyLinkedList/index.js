// Time Complexity
// Access    O(n)
// Search    O(n)
// Insertion O(1)
// Deletion  O(n)


class DoublyLinkedListNode {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

class DoublyLinkedList {
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
    const node = new DoublyLinkedListNode(value, null, this.head);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head = node;
    }
  }

  append(value) {
    const node = new DoublyLinkedListNode(value, this.tail, null);
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
          if (node.next) {
            node.next.prev = previousNode;
          }
        } else {
          this.head = node.next;
          this.head.prev = null;
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
      this.head.prev = null;
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

module.exports = DoublyLinkedList;



// const ll = new DoublyLinkedList();
// ll.append(333);
// console.log(1, ll);
// console.log(1, ll.toArray());
// ll.append(444);
// console.log(2, ll);
// console.log(2, ll.toString());
// ll.append(333);
// ll.append(666);
// console.log(3, ll);
// console.log(3, ll.toString());
// ll.prepend(111);
// ll.append(333);
// console.log(4, ll.toString());
// console.log(5, ll.find(333));
// console.log(6, ll.toString());
// console.log(6, ll.delete(333));
// console.log(6, ll.toString());
// console.log(6, ll);