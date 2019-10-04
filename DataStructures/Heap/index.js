// A Heap is a special Tree-based data structure in which the tree is a complete binary tree. Generally, Heaps can be 
// of two types:
// - Max-Heap: In a Max-Heap the key present at the root node must be greatest among the keys present at all of it’s 
// children. The same property must be recursively true for all sub-trees in that Binary Tree.
// - Min-Heap: In a Min-Heap the key present at the root node must be minimum among the keys present at all of it’s 
// children. The same property must be recursively true for all sub-trees in that Binary Tree.

class Heap {
  constructor(comparator) {
    this.compare = (a, b) => {
      const compare = comparator || ((a, b) => a === b ? 0 : a > b ? -1 : 1);
      if (a === Infinity) {
        return 1;
      } else if (b === Infinity) {
        return -1;
      } else {
        return compare(a, b);
      }
    }
    this.items = [];
  }

  getLeftChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }

  getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  getLeftChild(index) {
    return this.items[this.getLeftChildIndex(index)];
  }

  getRightChild(index) {
    return this.items[this.getRightChildIndex(index)];
  }

  getParent(index) {
    return this.items[this.getParentIndex(index)];
  }

  swap(i, j) {
    const temp = this.items[i];
    this.items[i] = this.items[j];
    this.items[j] = temp;
  }

  peek() {
    if (this.items.length === 0) {
      throw new Error('Heap is empty!');
    }
    return this.items[0];
  }

  poll() {
    if (this.items.length === 0) {
      throw new Error('Heap is empty!');
    }
    const item = this.items[0];
    const lastItem = this.items[this.items.length - 1];
    this.items[0] = lastItem;
    this.items = this.items.slice(0, this.items.length - 1);
    this.heapifyDown();
    return item;
  }

  add(item) {
    this.items.push(item);
    this.heapifyUp();
  }

  heapifyUp(index) {
    index = index || this.items.length - 1;
    while (this.getParent(index) !== undefined && this.compare(this.getParent(index), this.items[index]) === -1) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.getLeftChild(index) !== undefined) {
      let childIndex = this.getLeftChildIndex(index);
      if (this.getRightChild(index) !== undefined && this.compare(this.getRightChild(index), this.items[childIndex]) === 1) {
        childIndex = this.getRightChildIndex(index);
      }
      if (this.compare(this.items[index], this.items[childIndex]) === 1) {
        break;
      } else {
        this.swap(index, childIndex);
      }
      index = childIndex;
    }
  }

  find(item) {
    return this.items[this.findIndex(item)];
  }

  findIndex(item) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.compare(item, this.items[i]) === 0) {
        return i;
      }
    }
    return -1;
  }

  delete(item) {
    const index = this.findIndex(item);
    const deletedItem = this.items[index];
    this.items[index] = Infinity;
    this.heapifyUp(index);
    this.poll();
    return deletedItem;
  }
}

// const minHeap = new Heap();
// minHeap.add(4);
// minHeap.add(5);
// minHeap.add(6);
// minHeap.add(2);
// console.log(minHeap.items);
// console.log(minHeap.peek());
// console.log(minHeap.poll());
// console.log(minHeap.items);
// minHeap.add(3);
// minHeap.add(1);
// minHeap.add(9);
// minHeap.add(7);
// minHeap.add(2);
// console.log(minHeap.items);
// minHeap.add(8);
// console.log(minHeap.items);
// console.log(minHeap.findIndex(7));
// console.log(minHeap.find(7));
// console.log(minHeap.delete(7));
// console.log(minHeap.items);
// console.log('----------------');

// const maxHeap = new Heap((a, b) => a === b ? 0 : a < b ? -1 : 1);
// maxHeap.add(4);
// maxHeap.add(5);
// maxHeap.add(6);
// maxHeap.add(13);
// console.log(maxHeap.items);
// console.log(maxHeap.peek());
// console.log(maxHeap.poll());
// console.log(maxHeap.items);
// maxHeap.add(3);
// maxHeap.add(1);
// maxHeap.add(9);
// maxHeap.add(7);
// maxHeap.add(2);
// console.log(maxHeap.items);
// maxHeap.add(8);
// console.log(maxHeap.items);
// console.log(maxHeap.findIndex(7));
// console.log(maxHeap.find(7));
// console.log(maxHeap.delete(7));
// console.log(maxHeap.items);
// console.log('----------------');

// const minHeap2 = new Heap((a, b) => a.id === b.id ? 0 : a.id > b.id ? -1 : 1);
// minHeap2.add({ id: 4, name: 'four' });
// minHeap2.add({ id: 5, name: 'five' });
// minHeap2.add({ id: 6, name: 'six' });
// minHeap2.add({ id: 2, name: 'two' });
// console.log(minHeap2.items);
// console.log(minHeap2.peek());
// console.log(minHeap2.poll());
// console.log(minHeap2.items);
// minHeap2.add({ id: 3, name: 'three' });
// minHeap2.add({ id: 1, name: 'one' });
// console.log(minHeap2.items);
// minHeap2.add({ id: 0, name: 'zero' });
// console.log(minHeap2.items);
// console.log(minHeap2.find({ id: 3 }));
// console.log(minHeap2.delete({ id: 3 }));
// console.log(minHeap2.items);


module.exports = Heap;