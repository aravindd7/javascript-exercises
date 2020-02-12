// Asked by Microsoft

// Implement 3 stacks using a single list:
// class Stack:
//     def __init__(self):
//         self.list = []
//     def pop(self, stack_number):
//         pass
//     def push(self, item, stack_number):
//         pass

class Stack {
  constructor() {
    this.list = [];
  }

  pop(stackNumber) {
    let itemId = -1;
    for (let i = this.list.length - 1; i >= 0; i--) {
      // console.log(1, i, this.list[i]);
      if (this.list[i] && this.list[i].stackId === stackNumber) {
        itemId = i;
        break;
      }
    }
    // console.log(2, itemId);
    // console.log(3, this.list[itemId]);
    const result = itemId >= 0 ? this.list.splice(itemId, 1)[0].value : undefined;
    return result;
  }

  push(item, stackNumber) {
    this.list.push({ stackId: stackNumber, value: item });
  }
}

const s = new Stack();
s.push(11, 0);
s.push(1111, 2);
s.push(111, 1);
s.push(2222, 2);
s.push(222, 1);
s.push(3333, 2);

console.log(222, s.pop(1));
console.log(111, s.pop(1));
console.log(undefined, s.pop(1));
console.log(s);

console.log(11, s.pop(0));
console.log(undefined, s.pop(0));
console.log(s);

console.log(333, s.pop(2));
console.log(222, s.pop(2));
console.log(111, s.pop(2));
console.log(undefined, s.pop(2));
console.log(s);
