function swap(arr, i, j) {
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[j];
  arr[i] = arr[i] ^ arr[j];
}
function insertSort(arr) {
  if (arr === null || arr.length < 2) return;
  // 控制外层循环
  // 0 ~ 0 位置上有序
  // 0 ~ 1 位置上有序
  // 0 ~ 2 位置有序
  // 0 ~ i 位置上有序
  for (let i = 1; i < arr.length; i++) {
    // 0 - i 有序
    // j 不越界
    // 第一次 i-1 和 i比较 j和j+1
    // 第二次 i-2 和 i-1排序 
    for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      swap(arr, j, j + 1);
    }
  }
}
const arr = [1, 0, 4, 3, 2, 5];
insertSort(arr);
console.log(arr);

