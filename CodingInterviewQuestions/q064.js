// Asked by Google

// Determine whether a doubly linked list is a palindrome. What if it’s singly linked?
// For example, 1 -> 4 -> 3 -> 4 -> 1 returns True while 1 -> 4 returns False.

const DoublyLinkedList = require('../DataStructures/DoublyLinkedList');

const check = (dll) => {
  if (dll.head === null) {
    return undefined;
  }
  let headPointer = dll.head, tailPointer = dll.tail;
  while (headPointer && !Object.is(headPointer.next, tailPointer) || !Object.is(headPointer, tailPointer)) {
    if (headPointer.value !== tailPointer.value) {
      return false;
    }
    headPointer = headPointer.next;
    tailPointer = tailPointer.prev;
  }
  return true;
}

let dll1 = new DoublyLinkedList();
dll1.append(1);
dll1.append(2);
dll1.append(1);

console.log(true, check(dll1));

dll1 = new DoublyLinkedList();
dll1.append(4);
dll1.append(1);

console.log(false, check(dll1));

dll1 = new DoublyLinkedList();
dll1.append(4);

console.log(true, check(dll1));

dll1 = new DoublyLinkedList();
dll1.append(4);
dll1.append(4);
dll1.append(4);
dll1.append(4);
dll1.append(4);

console.log(true, check(dll1));

dll1 = new DoublyLinkedList();
dll1.append(4);
dll1.append(4);

console.log(true, check(dll1));

dll1 = new DoublyLinkedList();
dll1.append(4);
dll1.append(3);
dll1.append(6);
dll1.append(3);
dll1.append(4);

console.log(true, check(dll1));

dll1 = new DoublyLinkedList();
dll1.append(4);
dll1.append(2);
dll1.append(6);
dll1.append(3);
dll1.append(4);

console.log(false, check(dll1));