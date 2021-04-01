/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.minStack = [];
  this.dataStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (value) {
  if (this.minStack.length === 0) {
    this.minStack.push(value);
  } else if (value < this.minStack[this.minStack.length - 1]) {
    this.minStack.push(value);
  } else {
    const newMin = this.minStack[this.minStack.length - 1];
    this.minStack.push(newMin);
  }
  this.dataStack.push(value);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.dataStack.length === 0) {
    throw new Error('Your stack is empty');
  }
  this.minStack.pop();
  return this.dataStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.dataStack[this.dataStack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.dataStack.length === 0) {
    throw new Error('Your stack is empty');
  }
  return this.minStack[this.minStack.length - 1];
};
const stack = new MinStack();
// stack.push(1)
// stack.push(2)
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.getMin());
