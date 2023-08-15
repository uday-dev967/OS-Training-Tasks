"use strict";
// linked list using calss
/*
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  printLinkedList() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
  getTheMiddleElement() {
    let fast, slow;
    slow = fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const linkedNums = new LinkedList();
linkedNums.head = new Node(nums[0]);
let temp = linkedNums.head;
for (let i of nums.slice(1, nums.length)) {
  temp.next = new Node(i);
  temp = temp.next;
}
linkedNums.printLinkedList();
temp = linkedNums.head;
for (let i = 0; i < nums.length; i++) {
  console.log("tempdata", temp.data);
  if (temp.data === 3) {
    const prevAdd = temp.next;
    temp.next = new Node(222, prevAdd);
  }
  temp = temp.next;
}
console.log("initial", linkedNums);
temp = linkedNums.head;
let Newnode = new Node(22, temp);
console.log(Newnode);
console.log(linkedNums.head);
linkedNums.head = Newnode;
console.log(linkedNums);
console.log(linkedNums.head);
linkedNums.head = new Node(45, linkedNums.head);
console.log(linkedNums);

console.log(linkedNums.getTheMiddleElement().data);
*/

// linked list using function

const node = function (data, add = null) {
  // since this function has no owner or its owner is window object then this refers to window/undefined object we cannot use it here
  return {
    data: data,
    next: add,
  };
};

const linkedList = function () {
  return {
    head: null,
    printLinkedList() {
      let temp = this.head;
      while (temp) {
        console.log(temp.data);
        temp = temp.next;
      }
    },
  };
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const linkedNums = linkedList();
linkedNums.head = node(nums[0]);
let temp = linkedNums.head;
for (let i = 1; i < nums.length; i++) {
  temp.next = node(nums[i]);
  temp = temp.next;
}

linkedNums.printLinkedList();

// adding 222 b/w 3 and 4
temp = linkedNums.head;
for (let i = 0; i < nums.length; i++) {
  if (temp.data === 3) {
    let prevTemp = temp.next;
    temp.next = node(222, prevTemp);
    break;
  }
  temp = temp.next;
  if (temp.next === null) {
    break;
  }
}

linkedNums.printLinkedList();
// lets add 22 at first
console.log(linkedNums);
// method 1
// const oldHead = linkedNums.head;
// linkedNums.head = node(22, oldHead);
// console.log(linkedNums);

const oldHead = linkedNums.head;
linkedNums.head = node(22, oldHead);
// cannot use the below metod because linked nums is eventually an object which has its memory management in heap this memory reference give to call stack so even oldHead2 is declared with const it memory address cannot be change but it in heap the value might get changed so oldHead2 value will also change
const oldHead2 = linkedNums.head;
linkedNums.head.data = 35;
linkedNums.head.next = oldHead2;
console.log(linkedNums);
