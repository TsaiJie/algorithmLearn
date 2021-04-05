const mergeSort = (arr) => {
  if (arr === null || arr.length < 2) {
    return;
  }
  process(arr, 0, arr.length - 1);
};
// arr[L...R]上要是有序的
const process = (arr, L, R) => {
  if (L === R) return;
  let mid = L + ((R - L) >> 1);
  process(arr, L, mid);
  process(arr, mid + 1, R);
  merge(arr, L, mid, R);
};
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
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}
const arr = [1, 0, 10, 100, 9, 99, 88, 77, 44, 34, 23, 54];
const arr2 = []

for (let index = 0; index < 10000000; index++) {
   arr2.push(getRandomIntInclusive(0, 1000000))
}
console.time()
mergeSort(arr2);
console.timeEnd()

console.log(arr2);
