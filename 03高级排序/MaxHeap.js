function MyMaxHeap(limit) {
  this.heap = [];
  this.limit = limit;
  // 表示收集了多少个数 也表示下一个元素进来之后放在哪一个位置
  this.heapSize = 0;
}
MyMaxHeap.prototype.isEmpty = function () {
  return this.heapSize === 0;
};
MyMaxHeap.prototype.isFull = function () {
  return this.heapSize === this.limit;
};
MyMaxHeap.prototype.push = function (value) {
  if (this.heapSize === this.limit) {
    throw new Error('heap is full');
  }
  // 表示收集了多少个数 也表示下一个元素进来之后放在哪一个位置
  this.heap[this.heapSize] = value;
  this.heapInsert(this.heap, this.heapSize++);
};
// 上浮
MyMaxHeap.prototype.heapInsert = function (arr, index) {
  // arr[index] index是孩子
  // arr[index] 不比arr[index]大 停止
  // index = 0 的时候停止 没有父节点了
  // 子元素比父元素大的时候交换
  while (arr[index] > arr[Math.floor((index - 1) / 2)]) {
    this.swap(arr, index, Math.floor((index - 1) / 2));
    index = Math.floor((index - 1) / 2);
  }
};
MyMaxHeap.prototype.swap = function (arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
// 用户此时，让你返回最大值，并且在大根堆中把最大值删掉
// 剩下的数，应该保持大根堆结构
MyMaxHeap.prototype.pop = function () {
  let ans = this.heap[0];
  // 第一个数和最后一个数换位置
  this.swap(this.heap, 0, --this.heapSize);
  // 然后变成大根堆
  this.heapify(this.heap, 0, this.heapSize);
  return ans;
};
// 从index 的位置，往下看， 不断的下沉
// 停止的条件 我的孩子都不在比我大，已经没有孩子
MyMaxHeap.prototype.heapify = function (arr, index, heapSize) {
  // index 是父亲
  // 左孩子的下标
  let left = index * 2 + 1;
  while (left < heapSize) {
    //  左右两个孩子， 谁大，就把自己的下标给largest
    // 1 有右孩子 2 右孩子的值比左孩子大 否则都是左孩子
    const largestChildIndex =
      left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left;
    // 然后父亲和自己的最大孩子进行比较
    const largest =
      arr[largestChildIndex] > arr[index] ? largestChildIndex : index;
    if (largest === index) break;
    // 如果没有自己的孩子大 那么两个元素互换位置
    this.swap(arr, largestChildIndex, index);
    (index = largestChildIndex), (left = index * 2 + 1);
  }
};
// 堆排序，先让 0-0 0-1 0-2 0-3 0-4 0-n 变成大根堆 整个数组变成大根堆
// 让0 和 n-1的元素交换位置，堆的大小减一 此时找到一个最大值
// 0和 n-2 heapify 调成大顶堆 找到次大值
// 0 和 n-3 heapify 调成大顶堆 找到次大值
// 最终数组有序
MyMaxHeap.prototype.heapSort = function (arr) {
  if (arr === null || arr.length < 2) return;
  for (let i = 0; i < arr.length; i++) {
    this.heapInsert(arr, i);
  }
  let heapSize = arr.length;
  this.swap(arr, 0, --heapSize);
  while (heapSize > 0) {
    this.heapify(arr, 0, heapSize);
    this.swap(arr, 0, --heapSize);
  }
};

const heap = new MyMaxHeap(10);
// heap.push(1);
// heap.push(2);
// heap.push(3);
// heap.push(4);
// heap.push(5);
// heap.pop();
// console.log(heap);
const arr = [0, 3, 2, -1, 3, -2];
heap.heapSort(arr);
console.log(arr);
