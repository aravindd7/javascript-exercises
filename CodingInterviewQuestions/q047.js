// Asked by Google

// Given k sorted singly linked lists, write a function to merge all the lists into one sorted singly linked list.

const LinkedList = require('../DataStructures/LinkedList');

const merge = (linkedLists) => {
  let lls = linkedLists.reduce((acc, ll) => {
    const value = ll.head && ll.head.value;
    const next = ll.head && ll.head.next;
    acc = value ? { ...acc, [value]: acc[value] ? [...acc[value], next] : [next] } : acc;
    return acc;
  }, {});

  const ll = new LinkedList();
  while (Object.keys(lls).length > 0) {
    const value = Object.keys(lls)[0];
    const nextNodes = lls[value];
    const nextNode = nextNodes[0];
    ll.append(value);
    if (nextNodes.length > 1) {
      lls[value].shift();
    } else {
      delete lls[value];
    }
    if (nextNode) {
      lls[nextNode.value] = lls[nextNode.value] ? [...lls[nextNode.value], nextNode.next] : [nextNode.next];
    }
  }

  return ll;
}

const ll1 = new LinkedList();
ll1.append(22);
ll1.append(24);
ll1.append(29);
ll1.append(32);
ll1.append(35);
console.log('ll1', ll1.toString());

const ll2 = new LinkedList();
ll2.append(1);
ll2.append(5);
ll2.append(32);
console.log('ll2', ll2.toString());

const ll3 = new LinkedList();
ll3.append(1);
ll3.append(5);
ll3.append(50);
console.log('ll3', ll3.toString());

const ll4 = new LinkedList();
console.log('ll4', ll4.toString());

console.log('ll merged', merge([ll1, ll2, ll3, ll4]).toString())