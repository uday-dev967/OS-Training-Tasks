// // using function
// function stack() {
//   let stack = []; // suprised find that we can use same variable name as the function inside the same function
//   return {
//     push(element) {
//       stack.push(element);
//       return stack.length;
//     },
//     pop() {
//       if (stack.length === 0) {
//         return "stack is already empty";
//       }
//       const poped = stack[stack.length - 1];
//       stack = stack.slice(0, stack.length - 1);
//       return poped;
//     },
//     peek() {
//       if (stack.length === 0) {
//         return "stack is empty";
//       }
//       return stack[stack.length - 1];
//     },
//     clear() {
//       stack = [];
//     },
//     show() {
//       return stack;
//     },
//   };
// }

// const stack1 = stack();
// stack1.push(1);
// stack1.push(2);
// stack1.push(3);
// console.log(stack1.show());
// console.log(stack1.pop());
// stack1.push(4);
// console.log(stack1.show());
// console.log(stack1.peek());
// stack1.clear();
// console.log(stack1.show());

// using class
// class Stack {
//   constructor() {
//     this.items = [];
//     this.stackLength = 0;
//   }
//   push(element) {
//     // this.items = [...this.items, element];
//     this.items[this.stackLength] = element;
//     this.stackLength += 1;
//     return this.stackLength;
//   }
//   pop() {
//     if (this.isEmpty()) {
//       return "The stack is empty";
//     }
//     const popedItem = this.items[this.stackLength - 1];
//     this.items = this.items.slice(0, this.stackLength - 1);
//     this.stackLength -= 1;
//     return popedItem;
//   }
//   peek() {
//     if (this.isEmpty()) {
//       return "The stack is empty";
//     }
//     return this.items[this.stackLength - 1];
//   }
//   size() {
//     return this.stackLength;
//   }
//   clear() {
//     this.items = [];
//     this.stackLength = 0;
//     return;
//   }
//   isEmpty() {
//     return this.stackLength === 0 ? true : false;
//   }
//   show() {
//     return this.items;
//   }
// }

// class Stack {
//   constructor() {
//     this.items = {};
//     this.stackLength = 0;
//   }
//   push(element) {
//     // this.items = [...this.items, element];
//     this.items[this.stackLength] = element;
//     this.stackLength += 1;
//     return this.stackLength;
//   }
//   pop() {
//     if (this.isEmpty()) {
//       return "The stack is empty";
//     }
//     const popedItem = this.items[this.stackLength - 1];
//     delete this.items[this.stackLength - 1];
//     this.stackLength -= 1;
//     return popedItem;
//   }
//   peek() {
//     if (this.isEmpty()) {
//       return "The stack is empty";
//     }
//     return this.items[this.stackLength - 1];
//   }
//   size() {
//     return this.stackLength;
//   }
//   clear() {
//     this.items = [];
//     this.stackLength = 0;
//     return;
//   }
//   isEmpty() {
//     return this.stackLength === 0 ? true : false;
//   }
//   show() {
//     return this.items;
//   }
// }

const stack1 = new Stack();
let l = stack1.push(1);
console.log(l);
l = stack1.push(2);
console.log(l);
l = stack1.push(3);
console.log(l);

console.log(stack1.pop());
console.log(stack1.peek());
console.log(stack1.size());
console.log(stack1.isEmpty());
console.log(stack1.show());
stack1.clear();
console.log(stack1.isEmpty());
