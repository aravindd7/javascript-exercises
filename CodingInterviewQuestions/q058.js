// Asked by Google

// Given the head of a singly linked list, swap every two nodes and return its head.
// For example, given 1 -> 2 -> 3 -> 4, return 2 -> 1 -> 4 -> 3.

const LinkedList = require('../DataStructures/LinkedList');

const swapPairs = (ll) => {
  let current = ll.head;
  let prev = null;
  ll.head = current.next;

  while (current && current.next) {
    const node1 = current;
    const prevToSave = current;
    if (current.next) {
      current = current.next;
      const node2 = current;
      current = current.next;
      const next = node2.next;
      node2.next = node1;
      node1.next = next;
      if (prev) {
        prev.next = node2;
      }
      prev = prevToSave;
    }
  }

  if (ll.tail.next) {
    ll.tail = ll.tail.next;
  }

  return ll.head;
}

const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);
ll.append(6);
ll.append(7);
ll.append(8);
console.log('ll', ll.toString());

console.log('result', swapPairs(ll).toString());
console.log('ll', ll.toString());

ll.append(10);
ll.append(9);
ll.append(11);
console.log('ll', ll.toString());
swapPairs(ll);
console.log('ll', ll.toString());

ll.append(12);
ll.append(13);
ll.append(14);
console.log('ll', ll.toString());
swapPairs(ll);
console.log('ll', ll.toString());