// priority queue descending order

function priortyQueueDesc() {
  let head = null;
  let size = 0;
  function node(data, priority, next = null) {
    return {
      data,
      priority,
      next,
    };
  }
  return {
    push(el, pr = el) {
      let temp = head;
      let prev = head;
      if (head === null) {
        head = node(el, pr);
        size++;
        return size;
      }
      if (pr > head.priority) {
        head = node(el, pr, head);
        size++;
        return size;
      }
      while (temp.priority >= pr) {
        prev = temp;
        if (temp.next === null) {
          break;
        }
        temp = temp.next;
      }
      prev.next = node(el, pr, prev.next);
      size++;
      return size;
    },
    // push(el, pr = el, curr = head, prev = null) {
    //   if (curr === null || pr > head.priority) {
    //     if (prev === null) {
    //       head = node(el, pr, curr);
    //     } else {
    //       prev.next = node(el, pr, curr);
    //     }
    //     size++;
    //     return size;
    //   } else if (curr.priority >= pr) {
    //     return this.push(el, pr, curr.next, curr);
    //   }
    // },

    get() {
      return { head };
    },
    peek() {
      if (this.isEmpty()) {
        return "The Queue is empty can't peek";
      }
      return head.data;
    },
    pop() {
      if (this.isEmpty()) {
        return "The Queue is empty can't pop";
      }
      const poped = head.data;
      head = head.next;
      return poped;
    },
    isEmpty() {
      return size === 0;
    },
  };
}
// [[7,7]]
// [[8,8],[7,7]]
// [[8,8],[7,7],[5,5]]
// [[8,8],[7,7],[6,6],[5,5]]
// [[9,9],[8,8],[7,7],[6,6],[5,5]]
// [[9,9],[8,8],[7,7],[777,7],[6,6],[5,5]]
// [[9,9],[8,8],[7,7],[777,7],[6,6],[5,5],[5555,5]]
// [[9,9],[8,8],[7,7],[777,7],[6,6],[5,5],[5555,5],[5,5]]

// const x = priortyQueueDesc();
// x.push(7, 7);
// x.push(8, 8);
// x.push(5, 5);
// x.push(6, 6);
// x.push(9);
// x.push(777, 7);
// x.push(5555, 5);
// x.push(5);
// console.log(x.peek()); // 9
// console.log(x.isEmpty()); // false
// console.log(x.pop()); // 9
// console.log(x.get());

// unordered priority queue

function unorderedPriorityQueue() {
  let head = null;
  let size = 0;

  const allPr = [];

  function node(data, priority, next = null) {
    return {
      data,
      priority,
      next,
    };
  }
  return {
    push(el, pr = el) {
      if (this.isEmpty()) {
        head = node(el, pr);
        allPr.push(pr);
        high = Math.max(...allPr);
        size++;
        return size;
      }

      head = node(el, pr, head);
      size++;
      return size;
    },
    peekLow() {
      if (this.isEmpty()) return "Queue is empty can't pop";
      let curr = head;
      let out = head;
      while (curr) {
        if (curr.priority <= out.priority) {
          out = curr;
        }
        curr = curr.next;
      }
      console.log(out.data);
    },
    peekHigh() {
      if (this.isEmpty()) return "Queue is empty can't pop";
      let curr = head;
      let out = head;
      while (curr) {
        if (curr.priority <= out.priority) {
          out = curr;
        }
        curr = curr.next;
      }
      console.log(out.data);
    },
    popLow() {
      if (this.isEmpty()) return "Queue is empty can't pop";
      let curr = head;
      let out = head;
      let prev = null;
      while (curr) {
        if (curr.priority <= out.priority) {
          out = curr;
        }
        prev = curr;
        curr = curr.next;
      }
      console.log(out.data);
    },
    popHigh() {},
    isEmpty() {
      return size === 0;
    },
    get() {
      return { head };
    },
  };
}

const x2 = unorderedPriorityQueue();
x2.push(8);
x2.push(9);
x2.push(6);
x2.popLow();
