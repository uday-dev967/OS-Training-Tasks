"use strict";
// creating a binary search tree
// the value of left child node is always less than the parent node or the root node
// or the value of every left node is of a parent or root node is always less than the parent or the root node value
// the value of every right node of a parent or root node is always greataer than the parent or root node value

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }
  // inserting a new node
  insert(value) {
    let newNode = new Node(value);
    // if there is not root node
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    //console.log("current", currentNode);
    while (true) {
      // if the new value is same as current node value do not add
      if (currentNode.value === value) return false;
      // if the new node value is less than the current node value it should be place in the left binary tree
      else if (currentNode.value > value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      }
      // if the new node value is greater than the current node value it should be placed in the right binary tree
      else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }
}

const tree = new Bst();
// tree.root = new Node(10);
// tree.root.left = new Node(7);
// tree.root.right = new Node(15);
// tree.root.left.right = new Node(9);

tree.insert(10);
tree.insert(15);
tree.insert(5);
tree.insert(2);
tree.insert(1);
tree.insert(3);
tree.insert(4);
console.log(tree.root);
//              10
//           5     15
//        2
//      1   3
//            4
