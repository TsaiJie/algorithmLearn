function TwoStackImplementQueue() {
  // popStack必须为空的时候 才能导出数据
  this.popStack = [];
  this.pushStack = [];
}
TwoStackImplementQueue.prototype.enqueue = function (value) {
  this.pushStack.push(value);
  this.pushToPop();
};
//  push栈向Pop栈倒入元素
TwoStackImplementQueue.prototype.pushToPop = function () {
  if (this.popStack.length === 0) {
    while (this.pushStack.length) {
      this.popStack.push(this.pushStack.pop());
    }
  }
};
TwoStackImplementQueue.prototype.dequeue = function () {
  if (!this.popStack.length && !this.pushStack.length) {
    throw new Error('Queue is Empty');
  }
  this.pushToPop();
  return this.popStack.pop();
};
TwoStackImplementQueue.prototype.peek = function () {
  if (!this.popStack.length && !this.pushStack.length) {
    throw new Error('Queue is Empty');
  }
  this.pushToPop();
  return this.popStack[this.popStack.length - 1];
};
const queue = new TwoStackImplementQueue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())