// creating the binary tree using a function and avoiding the this keyword as much as possible

function bst() {
  let root = null;
  function node(value) {
    return { value, left: null, right: null };
  }
  return {
    insert(el) {
      let newNode = node(el);
      if (root === null) {
        root = newNode;
        return root;
      }
      let currentNode = root;
      while (true) {
        if (currentNode.value === el) return false;
        else if (el < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return root;
          }
          currentNode = currentNode.left;
        } else {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return root;
          }
          currentNode = currentNode.right;
        }
      }
    },
    // recurcive insert
    // insertNode(el, currentNode = root) {
    //   if (currentNode === null) {
    //     return node(el);
    //   }

    //   if (el === currentNode.value) {
    //     return currentNode;
    //   }

    //   if (el < currentNode.value) {
    //     currentNode.left = this.insertNode(currentNode.left, el);
    //   } else {
    //     currentNode.right = this.insertNode(currentNode.right, el);
    //   }
    //   return currentNode;
    // },
    show() {
      console.log(root);
    },
    find(el) {
      let currentNode = root;
      if (currentNode === null) return false;
      let found = false;
      while (currentNode && !found) {
        if (currentNode.value < el) {
          currentNode = currentNode.right;
        } else if (currentNode.value > el) {
          currentNode = currentNode.left;
        } else {
          found = true;
          return currentNode;
        }
      }
      return found;
    },
  };
}

const tree2 = bst();
// tree2.root = new Node(10);
// tree2.root.left = new Node(7);
// tree2.root.right = new Node(15);
// tree2.root.left.right = new Node(9);

tree2.insert(10);
tree2.insert(15);
tree2.insert(5);
tree2.insert(2);
tree2.insert(1);
tree2.insert(3);
tree2.insert(4);
tree2.insert(6);
tree2.show();
console.log(tree2.find(100));
console.log(tree2.find(4));
//              10
//           5     15
//        2
//      1   3
//            4
