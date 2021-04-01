function swap(arr, i, j) {
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[j];
  arr[i] = arr[i] ^ arr[j];
}
function bubbleSort(arr) {
  if (arr === null || arr.length < 2) return;
  // 控制外层循环
  // 0 ~ N - 1
  // 0 ~ N - 2
  // 0 ~ N - 3
  for (let e = arr.length - 1; e > 0; e--) {
    //  0 ~ 1
    //  1 ~ 2
    //  2 ~ 3
    // e - 1  ~ e
    for (let i = 0; i < e; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }
  }
}
const arr = [1, 0, 4, 3, 2, 5];
bubbleSort(arr);
console.log(arr);
