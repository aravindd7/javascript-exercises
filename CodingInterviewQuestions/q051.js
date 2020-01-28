// Asked by Microsoft

// Let's represent an integer in a linked list format by having each node represent a digit in the number. The nodes
// make up the number in reversed order.
// For example, the following linked list:
// 1 -> 2 -> 3 -> 4 -> 5
// is the number 54321.
// Given two linked lists in this format, return their sum in the same linked list format.
// For example, given
// 9 -> 9
// 5 -> 2
// return 124 (99 + 25) as:
// 4 -> 2 -> 1

const LinkedList = require('../DataStructures/LinkedList');

const sum = (ll1, ll2) => {
  const ll3 = new LinkedList();

  let current1 = ll1.head;
  let current2 = ll2.head;
  let m = 0;

  while (current1 || current2) {
    let currentSum = current1 ? current1.value : 0;
    currentSum += current2 ? current2.value : 0;
    currentSum += m;
    const n = currentSum % 10;
    m = Math.trunc(currentSum / 10);

    ll3.append(n);

    current1 = current1 && current1.next;
    current2 = current2 && current2.next;

    if (!current1 && !current2 && m > 0) {
      ll3.append(m);
    }
  }

  return ll3;
}

const ll1 = new LinkedList();
ll1.append(2);
ll1.append(9);
ll1.append(8);
ll1.append(1);
console.log('ll1', ll1.toString());

const ll2 = new LinkedList();
ll2.append(4);
ll2.append(9);
console.log('ll2', ll2.toString());

console.log('ll3 sum', sum(ll1, ll2).toString());