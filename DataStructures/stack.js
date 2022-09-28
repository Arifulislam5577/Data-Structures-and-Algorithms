// The Stack data structure is a sequential collection of elements that follows the priciple of last in first out(LIFO)

// Stack support two main operations
//-- push/add element to the stack
//-- pop/remove element from the stack

class Stack {
  constructor() {
    this.arr = [];
  }

  add(element) {
    this.arr.push(element);
  }

  remove() {
    return this.arr.pop();
  }
  size() {
    return this.arr.length;
  }
  print() {
    return this.arr;
  }
  peek() {
    return this.arr[this.arr.length - 1];
  }
  isEmpty() {
    return this.arr.length === 0;
  }
}

const newStack = new Stack();

newStack.add(1);
newStack.add(2);
newStack.add(3);
newStack.add(4);
newStack.add(5);
newStack.add(6);

console.log(newStack.remove());
console.log(newStack.print());
console.log(newStack.size());
