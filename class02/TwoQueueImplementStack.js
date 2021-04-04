
// 两个队列实现一个栈
function TwoQueueImplementStack() {
  this.queue = [];
  this.help = [];
}

TwoQueueImplementStack.prototype.push = function (value) {
  // queue 入队
  this.queue.unshift(value);
};
TwoQueueImplementStack.prototype.pop = function () {
  // queue 出队
  while (this.queue.length > 1) {
    this.help.unshift(this.queue.pop());
    
  }
  const ans = this.queue.pop();
  let tmp = this.queue;
  this.queue = this.help;
  this.help = tmp;
  return ans;
};
TwoQueueImplementStack.prototype.peek = function () {
  while (this.queue.length > 1) {
    this.help.unshift(this.queue.pop());
  }
  const ans = this.queue.pop();
  let tmp = this.queue;
  this.queue = this.help;
  this.help = tmp;
  return ans;
};

const  stack = new TwoQueueImplementStack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())