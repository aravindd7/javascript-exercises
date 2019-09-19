class BinarySearchTreeNode {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.value = value;
  }

  traverseInOrder(callback) {
    return [
      ...(this.left ? this.left.traverseInOrder(callback) : []),
      callback ? callback(this.value) : this.value,
      ...(this.right ? this.right.traverseInOrder(callback) : [])
    ];
  }

  toString(callback) {
    return this.traverseInOrder(callback).toString();
  }
}

class BinarySearchTree {
  constructor(comparator) {
    this.root = null;
    this.compare = comparator || ((a, b) => a === b ? 0 : (a > b ? -1 : 1));
  }

  toString(callback) {
    return this.root ? this.root.toString(callback) : '';
  }

  insert(value) {
    // console.log('insert', value);
    const newNode = new BinarySearchTreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertToNodeOrDeeper(this.root, newNode);
    }
  }

  insertToNodeOrDeeper(node, newNode) {
    if (this.compare(node.value, newNode.value) === 0) {
      node.value = newNode.value;
    } else if (this.compare(node.value, newNode.value) < 0) {
      if (!node.left) {
        node.left = newNode;
        node.left.parent = node;
      } else {
        this.insertToNodeOrDeeper(node.left, newNode);
      }
    } else if (this.compare(node.value, newNode.value) > 0) {
      if (!node.right) {
        node.right = newNode;
        node.right.parent = node;
      } else {
        this.insertToNodeOrDeeper(node.right, newNode);
      }
    }
  }

  contains(value) {
    return !!this.find(value);
  }

  find(value) {
    return !this.root ? null : this.compareNodeOrDeeper(this.root, value);
  }

  compareNodeOrDeeper(node, value) {
    if (this.compare(node.value, value) === 0) {
      return node;
    } else if (this.compare(node.value, value) < 0) {
      return !node.left ? null : this.compareNodeOrDeeper(node.left, value);
    } else if (this.compare(node.value, value) > 0) {
      return !node.right ? null : this.compareNodeOrDeeper(node.right, value);
    }
  }

  setChildOfNode(node, oldChild, newChild) {
    if (!node) {
      this.root = newChild;
    } else if (node.left && this.compare(node.left.value, oldChild.value) === 0) {
      node.left = newChild;
    } else if (node.right && this.compare(node.right.value, oldChild.value) === 0) {
      node.right = newChild;
    }
    if (newChild) {
      newChild.parent = node;
    }
  }

  delete(value) {
    const nodeToDelete = this.find(value);
    if (!nodeToDelete) {
      return null;
    } else if (!nodeToDelete.left && !nodeToDelete.right) {
      // console.log('node is leaf');
      this.setChildOfNode(nodeToDelete.parent, nodeToDelete, null);
    } else if (nodeToDelete.left && !nodeToDelete.right) {
      // console.log('node has only one child - left');
      this.setChildOfNode(nodeToDelete.parent, nodeToDelete, nodeToDelete.left);
    } else if (!nodeToDelete.left && nodeToDelete.right) {
      // console.log('node has only one child - right');
      this.setChildOfNode(nodeToDelete.parent, nodeToDelete, nodeToDelete.right);
    } else if (nodeToDelete.left && nodeToDelete.right) {
      // console.log('node has two children, putting left on deleted place, moving right to its place');
      this.setChildOfNode(nodeToDelete.parent, nodeToDelete, nodeToDelete.left);
      this.insertToNodeOrDeeper(nodeToDelete.left, nodeToDelete.right);
    }
    return nodeToDelete.value;
  }
}


const bst = new BinarySearchTree((a, b) => a.id === b.id ? 0 : (a.id > b.id ? -1 : 1));
console.log('bst', bst.toString(n => '<' + n.id + ':' + n.name + '>'));
bst.insert({ id: 3, name: 'Three' });
console.log('bst', bst.toString(n => '<' + n.id + ':' + n.name + '>'));
bst.insert({ id: 8, name: 'Eight' });
console.log('bst', bst.toString(n => '<' + n.id + ':' + n.name + '>'));
bst.insert({ id: 4, name: 'Four' });
bst.insert({ id: 4, name: 'Four' });
bst.insert({ id: 4, name: 'Four' });
console.log('bst', bst.toString(n => '<' + n.id + ':' + n.name + '>'));
bst.insert({ id: 1, name: 'One' });
console.log('bst', bst.toString(n => '<' + n.id + ':' + n.name + '>'));
bst.insert({ id: 9, name: 'Seven' });
console.log('bst', bst.toString(n => '<' + n.id + ':' + n.name + '>'));
bst.insert({ id: 6, name: 'Six' });
console.log('bst', bst.toString(n => '<' + n.id + ':' + n.name + '>'));
// console.log('bst', bst.root.right.left.value);

console.log('bst contains', bst.contains({ id: 3 }));
console.log('bst contains', bst.contains({ id: 9 }));
console.log('bst contains', bst.contains({ id: 6 }));
console.log('bst contains', bst.contains({ id: 2 }));


console.log('bst contains', bst.contains({ id: 2 }));
console.log('bst delete', bst.delete({ id: 2 }));
console.log('bst', bst.toString(n => '<' + n.id + ':' + n.name + '>'));
console.log('bst delete', bst.delete({ id: 8 }));
console.log('bst', bst.toString(n => '<' + n.id + ':' + n.name + '>'));
console.log('bst contains', bst.contains({ id: 9 }));
console.log('bst delete', bst.delete({ id: 9 }));
console.log('bst contains', bst.contains({ id: 9 }));
console.log('bst', bst.toString(n => '<' + n.id + ':' + n.name + '>'));
console.log('bst delete', bst.delete({ id: 1 }));
console.log('bst', bst.toString(n => '<' + n.id + ':' + n.name + '>'));
console.log('bst delete', bst.delete({ id: 3 }));
console.log('bst', bst.toString(n => '<' + n.id + ':' + n.name + '>'));


// const bst = new BinarySearchTree();
// // console.log('bst', bst);
// bst.insert(3);
// console.log('bst', bst.toString());
// bst.insert(8);
// console.log('bst', bst.toString());
// bst.insert(4);
// bst.insert(4);
// bst.insert(4);
// console.log('bst', bst.toString());
// bst.insert(1);
// console.log('bst', bst.toString());
// bst.insert(7);
// console.log('bst', bst.toString());
// bst.insert(6);
// console.log('bst', bst.toString());