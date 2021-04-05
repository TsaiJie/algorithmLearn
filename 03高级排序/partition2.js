// 给定一个数组，和一个整数num， 请把小于等于num的数放在数组的左边，大于等于num的数放在数组的右边
// 要求时间复杂度O（n） 空间复杂度O(1)
//  [5,3,7,2,3,4,1] num 3
const partition2 = (arr, num) => {
  let p = -1; // 小于等于区 ，记录右边界
  let i = 0;
  // arr[i]<=num 当前数和小于等于区下一个位置交换 i++
  // arr[i] > num i++
  while (i < arr.length) {
    if (arr[i] <= num) {
      swap(arr, i++, ++p);
    } else {
      i++;
    }
  }
};
const swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j];
  arr[j] = temp;
};
const arr = [5, 3, 7, 2, 3, 4, 1];
const num = 3;
partition2(arr, num);
console.log(arr);
