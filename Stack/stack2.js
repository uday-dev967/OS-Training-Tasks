// stack data structure using linked list unlike the previous linked list we do not fix the head to 1st element(node) but we will change the head to the new element(new node) and new node.next will contain the rest of linked list or the linked list of will start from new node;
"use strict";

// using class

// class Stack {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   node(data, add = null) {
//     return {
//       data,
//       next: add,
//     };
//   }

//   push(element) {
//     const temp = this.node(element);
//     temp.next = this.head;
//     this.head = temp;
//     this.size++;
//     return this.size;
//   }
//   pop() {
//     if (this.isEmpty()) return "Can't pop the stact is empty";
//     else {
//       const poped = this.head.data;
//       this.head = this.head.next;
//       this.size--;
//       return poped;
//     }
//   }

//   peek() {
//     if (this.isEmpty()) return "Oops!the stack is empty";
//     return this.head.data;
//   }
//   isEmpty() {
//     return this.size === 0;
//   }
//   clear() {
//     this.head = null;
//     this.size = 0;
//     return "stackt is cleared";
//   }
//   print() {
//     console.log(this);
//   }
// }

// const x = new Stack();
// console.log(x.push(1));
// console.log(x.push(2));
// console.log(x.push(3));
// console.log(x.push(4));
// x.print();
// console.log(x.pop());
// console.log(x.pop());
// console.log(x.peek());
// console.log(x.isEmpty());
// console.log(x.clear());
// console.log(x.isEmpty());

// unsing function

export function stack() {
  let head = null;
  let size = 0;
  function node(data, add = null) {
    return { data, next: add };
  }

  return {
    push(elelment) {
      const newNode = node(elelment);
      newNode.next = head;
      head = newNode;
      size++;
      return size;
    },
    pop() {
      if (this.isEmpty()) return "Can't pop the stack is empty";
      const poped = head.data;
      head = head.next;
      size--;
      return poped;
    },
    peek() {
      if (this.isEmpty()) return "Oops! the stack is empty";
      return head.data;
    },
    clear() {
      head = null;
      size = 0;
      return "The stack is cleared";
    },
    isEmpty() {
      return size === 0;
    },
    print() {
      console.log(head);
    },
    size() {
      return size;
    },
  };
}

// const x = stack();
// const y = stack();
// console.log(y.push(58));
// console.log(x.push(11));
// console.log(x.push(21));
// console.log(x.push(31));
// console.log(x.push(41));
// x.print();
// y.print();
// console.log(x.pop());
// console.log(x.pop());
// console.log("x head", x.peek());
// console.log("y head", y.peek());
// console.log("x:", x.size());
// console.log("y:", y.size());
// console.log(x.isEmpty());
// console.log(x.clear());
// console.log(x.isEmpty());
