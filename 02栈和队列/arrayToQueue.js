class myQueue {
  constructor(limit) {
    this.arr = new Array(limit);
    this.enqueueIndex = 0;
    this.dequeueIndex = 0;
    this.size = 0;
    this.limit = limit;
  }
  enqueue(value) {
    if (this.size === this.limit) {
      throw new Error('队列满了，不能再加了');
    }
    this.size++;
    this.arr[this.enqueueIndex] = value;
    this.enqueueIndex = this.nextIndex(this.enqueueIndex);
  }
  dequeue() {
    if (this.size === 0) {
      throw new Error('队列满了，不能再拿了');
    }
    this.size--;
    const res = this.arr[this.dequeueIndex];
    this.dequeueIndex = this.nextIndex(this.dequeueIndex);
    return res;
  }
  // 如果下标是i，返回下一个值
  nextIndex(i) {
    return i < this.limit - 1 ? i + 1 : 0;
  }
}
const queue = new myQueue(5)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
console.log(queue);
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())

