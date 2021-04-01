function exist(sortedArr, num) {
  if (sortedArr == null || sortedArr.length === 0) return;
  let L = 0;
  let R = sortedArr.length - 1;
  let mid = 0;
  // L ... R
  while (L < R) {
    mid = L + ((R - L) >> 1);
    if (sortedArr[mid] === num) {
      return true;
    } else if (sortedArr[mid] > num) {
      R = mid - 1;
    } else {
      L = mid + 1;
    }
  }
  return sortedArr[L] === num;
}
const arr = [0, 1, 2, 3, 4, 5];
console.log(exist(arr, 6));
