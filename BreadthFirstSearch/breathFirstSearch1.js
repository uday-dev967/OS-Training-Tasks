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

    show() {
      console.log(root);
    },
    get() {
      return { root };
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
tree2.insert(10);
tree2.insert(15);
tree2.insert(5);
tree2.insert(2);
tree2.insert(1);
tree2.insert(3);
tree2.insert(4);
tree2.insert(6);
tree2.show();
// console.log(tree2.find(100));
// console.log(tree2.find(4));

//              10
//           5     15
//         2   6
//       1   3
//            4

// breath first search
// create a queue which initally has root in it
// repeat the steps below as longs the queue is not empty
// if the 1st element(node) of queue has child elements then add the childs in to the queue and remove the 1st element in the queue and push it (node) in the  out-put
// else remove the 1st element in the queue and push it (node) in the  out-put

// queue [10] , []
// queue [5,15] , [10]
// queue [15,2,6] , [10,5]
// queue [2,6] , [10,5,15]
// queue [6,1,3] , [10,5,15,2]
// queue [1,3] , [10,5,15,2,6]
// queue [3] , [10,5,15,2,6,1]
// queue [4] , [10,5,15,2,6,1,3]
// queue [] , [10,5,15,2,6,1,3,4]

function breathFirstSearch(tree, queue = [tree.root]) {
  const out = [];
  while (queue.length) {
    const node = queue.shift();
    out.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return out;
}
const tree = tree2.get();
// console.log("treee", tree);
const out = breathFirstSearch(tree);
console.log(out);

// depth first search
// function depthFirstSearch(tree) {
//   const out = [];
//   function preorder(node) {
//     out.push(node.value);
//     if (node.left) preorder(node.left);
//     if (node.right) preorder(node.right);
//   }
//   preorder(tree.root);
//   return out;
// }

// const out2 = depthFirstSearch(tree);
// console.log(out2);
