// 给定一个数组，和一个整数num， 请把小于num的数放在数组的左边，等于num的放在中间，大于num的数放在数组的右边
// 要求时间复杂度O（n） 空间复杂度O(1)
//  [5,3,7,2,3,4,1] num 3
// 设置两个区域 小于区域-1 大于区域 arr.length

// arr[i]<num 当前数和小于区下一个位置交换 i++ 小于区域又阔 p++
// arr[i] = num i++
// arr[i]>num 当前数和大区左边一个位置交换位置 大于区域左扩展 i留在原地
const partition3 = (arr, num) => {
  let i = 0;
  let p = -1; // 小于区域
  let q = arr.length; // 大于区域
  while (i !== q) {
    if (arr[i] < num) {
      swap(arr, i++, ++p);
    } else if (arr[i] > num) {
      swap(arr, i, --q);
    } else {
      i++;
    }
  }
};
const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
const arr = [5, 3, 7, 2, 3, 4, 1, 3];
const num = 3;
// partition3(arr, num);
// console.log(arr);
// 返回等于区最左和最右边的位置
const partition3plus = (arr, L, R) => {
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
console.log(partition3plus(arr, 0, arr.length-1))
console.log(arr);