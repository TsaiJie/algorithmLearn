function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function selectionSort(arr) {
  if (arr === null || arr.length < 2) return;
  // 0 - N-1 找到最小的放到0位置
  // 1 - N-1 找到最小的放到1位置
  // 2 - N-1 找到最小的放到2位置
  // 每次都拿到最小的一个 然后放在前面
  for (let i = 0; i < arr.length - 1; i++) {
    // 默认最小值在i位置  i - N-1 找到最小值放到i位置
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      //  i- N-1上找到最小值的下标
      minIndex = arr[j] < arr[minIndex] ? j : minIndex;
    }
    swap(arr, i, minIndex);
  }
}
const arr = [1, 0, 4, 3, 2, 5];
selectionSort(arr);
console.log(arr);
