const partition = (arr, L, R) => {
  if (L > R) {
    return [-1, -1];
  }
  if (L === R) {
    return [L, R];
  }
  // 以 数组的R元素划分
  const num = arr[R];
  let i = L;
  let p = L - 1; // 小于区域的又边界
  let q = R + 1; // 大于区域的左边界
  while (i !== q) {
    if (arr[i] < num) {
      swap(arr, i++, ++p);
    } else if (arr[i] > num) {
      swap(arr, i, --q);
    } else {
      i++;
    }
  }
  return [p + 1, q - 1];
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
  //  随机选择一个位置和最后一个位置交换
  swap(arr, getRandomIntInclusive(L, R), R);
  let equalArea = partition(arr, L, R);
  process(arr, L, equalArea[0] - 1);
  process(arr, equalArea[1] + 1, R);
};
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}
const arr = [5, 3, 7, 2, 3, 4, 1, 3];
quickSort(arr);
console.log(arr);
