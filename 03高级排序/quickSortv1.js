const partition = (arr, L, R) => {
  if (L > R) {
    return -1;
  }
  if (L === R) {
    return L;
  }
  let p = L - 1; // 小于等于区 ，记录右边界
  let i = L;
  const num = arr[R];
  // arr[i]<=num 当前数和小于等于区下一个位置交换 i++
  // arr[i] > num i++
  while (i <= R) {
    if (arr[i] <= num) {
      swap(arr, i++, ++p);
    } else {
      i++;
    }
  }
  return p;
};
const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
const quickSort = (arr) => {
  if (arr === null || arr.length < 2) return;
  process(arr, 0, arr.length - 1);
};
const process = (arr, L, R) => {
  if (L >= R) return;
  let M = partition(arr, L, R);
  process(arr, L, M - 1);
  process(arr, M + 1, R);
};
const arr = [5, 3, 7, 2, 3, 4, 1, 3];
quickSort(arr);
console.log(arr);