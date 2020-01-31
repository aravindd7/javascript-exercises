// Asked by Google

// Given a singly linked list and an integer k, remove the kth last element from the list. k is guaranteed to be
// smaller than the length of the list.
// The list is very long, so making more than one pass is prohibitively expensive.
// Do this in constant space and in one pass.

const LinkedList = require('../DataStructures/LinkedList');

const getKthFromTheEnd = (ll, k) => {
  let current1 = ll.head;
  let current2 = ll.head;
  for (let i = 0; i < k; i++) {
    current2 = current2.next;
  }
  while (current2.next) {
    current1 = current1.next;
    current2 = current2.next;
  }
  current1.next = current1.next.next;

  return ll;
}

const ll1 = new LinkedList();
ll1.append(1);
ll1.append(2);
ll1.append(3);
ll1.append(4);
ll1.append(5);
ll1.append(6);
ll1.append(7);
console.log('ll1', ll1.toString());

console.log('result', getKthFromTheEnd(ll1, 3).toString());
console.log('result', getKthFromTheEnd(ll1, 4).toString());