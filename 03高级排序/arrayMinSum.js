// 用常见面试题再深入理解一下归并排序的精髓
/**
    在一个数组中，一个数左边比它小的数的总和，叫数的小和，所有数的小和累加起来，叫做数组小和。求数组小和。
    例子: [1,3,4,2,5] 
    1左边比1小的数:没有
    3左边比3小的数: 1
    4左边比4小的数: 1、3 
    2左边比2小的数: 1
    5左边比5小的数: 1、3、4、2
    所以数组的小和为1+1+3+1+1+3+4+2=16
 */
//! 可以这样思考 右边有多少个比自己大
//! 先在一个小范围 找到有多少个比自己大， 然后merge过程中会遇到更大范围的右组，然后在这个大范围中找到有多少个比自己的大， 依次类推
//! 什么时候产生小和？ => 左组的数比右组的数小 才产生小和
//! 当左组的数和右组的数相等的时候，先拷贝右组的数 不产生小和
//! 当左组的数大于右组的数时候，先拷贝右组的数 不产生小和

const smallSum = (arr) => {
  if (arr == null || arr.length < 2) return 0;
  return process(arr, 0, arr.length - 1);
};
// 所有merge时，产生的小和，累加
// 左排序 会有若干个merge行为
// 右排序 会有若干个merge行为
// 整体merge
const process = (arr, L, R) => {
  if (L === R) return 0;
  let mid = L + ((R - L) >> 1);
  return (
    process(arr, L, mid) + process(arr, mid + 1, R) + merge(arr, L, mid, R)
  );
};
const merge = (arr, L, mid, R) => {
  let help = new Array(R - L + 1);
  let p1 = L;
  let p2 = mid + 1;
  let i = 0;
  let res = 0;
  while (p1 <= mid && p2 <= R) {
    res += arr[p1] < arr[p2] ? (R - p2 + 1) * arr[p1] : 0;
    help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
  }
  // p1和p2至少有一个越界
  while (p1 <= mid) {
    help[i++] = arr[p1++];
  }
  while (p2 <= R) {
    help[i++] = arr[p2++];
  }
  for (let i = 0; i < help.length; i++) {
    arr[L + i] = help[i];
  }
  return res;
};
console.log(smallSum([1, 3, 4, 2, 5]))
