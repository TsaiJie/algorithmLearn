// 用常见面试题再深入理解一下归并排序的精髓
// ! 逆序对 思路 左边有多少个比自己大
// ! 右边小的时候产生个数
// ! 相等的时候先拷贝左边的
const array = [];
const descendingPair = (arr) => {
  if (arr == null || arr.length < 2) return 0;
  return process(arr, 0, arr.length - 1);
};
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
    // ! 右边小的时候产生个数
    res += arr[p1] > arr[p2] ? (mid - p1 + 1) * 1 : 0;
    if (arr[p1] > arr[p2]) {
      res += (mid - p1 + 1) * 1;
      for (let j = p1; j <= mid; j++) {
        array.push([arr[j], arr[p2]])
      }
    }
    // ! 相等的时候先拷贝左边的
    help[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++];
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
console.log(descendingPair([7, 5, 6, 4]));
console.log(array)