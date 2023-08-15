// unsing function

export function stack() {
  let head = null;
  let size = 0;
  let tail = null;
  let count = 0;
  function node(data, add = null) {
    return { data, next: add };
  }

  return {
    push(elelment) {
      const newNode = node(elelment);
      newNode.next = head;
      head = newNode;
      size++;
      if (count === 0) (tail = newNode), count++;
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
    // insertingAt(el1, el2, el) {
    //   let temp = head;
    //   // console.log("hd", head);
    //   // console.log("si", size);
    //   while (temp.data !== el2) {
    //     console.log("temp data", temp.data);
    //     const prevadd = temp.next;
    //     if (temp.data === el1) {
    //       temp.next = node(el, prevadd);
    //       size++;
    //       break;
    //     }
    //     temp = temp.next;
    //   }
    // console.log("si", size);
    // },
    insertingAt(index = size, el) {
      let temp = head;
      let count = 1;
      if (index <= size) {
        if (index === 0) {
          return this.push(el);
        }
        while (count < index) {
          count++;
          temp = temp.next;
        }
        const prevadd = temp.next;
        temp.next = node(el, prevadd);
        size++;
        return size;
      }
      return "index out of range";
    },
    insertingAtTheEnd(el) {
      console.log("prevTail", tail);
      tail.next = node(el);
      tail = tail.next;
      console.log("currTail", tail);
    },
  };
}

const x = stack();
// const y = stack();
// console.log(y.push(58));
console.log(x.push(11));
console.log(x.push(21));
console.log(x.push(31));
console.log(x.push(41));
x.print();
// y.print();
// x.insertingAt(31, 21, 222); // fix to index
// x.insertingAt(2, 525);

console.log(x.insertingAt(100, 252));
// x.insertingAtTheEnd(555);
// // in stack x adding 222 in between 31 and 21
x.print();
// console.log(x.pop());
// console.log(x.pop());
// console.log("x head", x.peek());
// // console.log("y head", y.peek());
// console.log("x:", x.size());
// // console.log("y:", y.size());
// console.log(x.isEmpty());
// console.log(x.clear());
// console.log(x.isEmpty());
