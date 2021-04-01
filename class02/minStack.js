// 实现一个特殊的栈，在基本功能的基础上，在实现返回栈中最小元素的功能
// pop push getMin操作的时间复杂度都是O(1)
// 两个栈实现 minStack 和dataStack
class MinStack {
  constructor() {
    this.minStack = [];
    this.dataStack = [];
  }
  push(value) {
    if (this.minStack.length === 0) {
      this.minStack.push(value);
    } else if (value < this.minStack[this.minStack.length - 1]) {
      this.minStack.push(value);
    } else {
      const newMin = this.minStack[this.minStack.length - 1];
      this.minStack.push(newMin);
    }
    this.dataStack.push(value);
  }
  pop() {
    if (this.dataStack.length === 0) {
      throw new Error('Your stack is empty');
    }
    this.minStack.pop();
    return this.dataStack.pop();
  }
  getMin() {
    if (this.dataStack.length === 0) {
      throw new Error('Your stack is empty');
    }
    return this.minStack[this.minStack.length - 1];
  }
}

const stack = new MinStack();
// stack.push(1)
// stack.push(2)
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.getMin());
