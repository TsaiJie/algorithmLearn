const merge = (arr, L, mid, R) => {
  const help = new Array(R - L + 1);
  let i = 0;
  let p1 = L;
  let p2 = mid + 1;
  while (p1 <= mid && p2 <= R) {
    // 谁小存那个
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
};
const mergeSort = (arr) => {
  if (arr === null || arr.length < 2) return;
  const N = arr.length - 1;
  let mergeSize = 1; //当前有序左组的长度 1 2 4 8 。。。2^n
  while (mergeSize < N) {
    let L = 0;
    // 让每一组有序
    while (L < N) {
      const mid = L + mergeSize - 1; // L ... M 左组
      if (mid > N) break; // 左边如果连左组的不能形成， 说明已经有序
      const R = Math.min(mid + mergeSize, N); // M+1 ... L 右组的下标大于数组的长度 说明右边构不成一组，那么数组最后的长度就是R的长度
      merge(arr, L, mid, R);
      L = R + 1;
    }
    // 防止溢出
    if (mergeSize > N / 2) break;
    mergeSize = mergeSize << 1;
  }
};

const arr = [1, 0, 10, 100, 9, 99, 88, 77, 44, 34, 23, 54];
mergeSort(arr);
console.log(arr);
