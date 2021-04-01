class myStack {
  constructor() {
    this.arr = [];
    this.__index = 0;
  }
  pop() {
    if (this.__index <= 0) {
      console.error('栈为空');
      return undefined;
    }
    return this.arr[--this.__index];
  }
  push(value) {
    this.arr[this.__index++] = value;
  }
  peek() {
    if (this.__index <= 0) {
      console.error('栈为空');
      return undefined;
    }
    return this.arr[this.__index - 1];
  }
}

const stack = new myStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.peek(), 'peek');
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek(), 'peek');
