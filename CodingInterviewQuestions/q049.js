// Asked by Google

// Given the head of a singly linked list, reverse it in-place.

const LinkedList = require('../DataStructures/LinkedList');

const reverse = (ll) => {
  ll.tail = ll.head;
  let currentNode = ll.head;
  let prevNode = null;
  do {
    const next = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = next;
  } while (currentNode);
  ll.head = prevNode;

  return ll;
};

const ll1 = new LinkedList();
ll1.append(1);
ll1.append(2);
ll1.append(3);
ll1.append(4);
ll1.append(5);
console.log('ll1', ll1.toString());

console.log('ll1 reversed', reverse(ll1).toString());