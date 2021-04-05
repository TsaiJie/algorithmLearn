//arr 是无序 不相等
// 找出一个局部最小
function getLessIndex(arr) {
  if (arr === null || arr.length === 0) return -1;

  if (arr.length === 1 || arr[0] < arr[1]) return 0;

  if (arr[arr.length - 1] < arr[arr.length - 2]) return arr.length - 1;
  let left = 1;
  let right = arr.length - 2;
  let mid = 0;
  while (left < right) {
    mid = left + ((right - left) >> 1);
    if (arr[mid] > arr[mid - 1]) {
      right = mid - 1;
    } else if (arr[mid] > arr[mid + 1]) {
      left = mid + 1;
    } else {
      //  说明arr[mid]最小
      return mid;
    }
  }
  return left;
}

const arr = [1, 0, 4, 3, 2, 5];
console.log(getLessIndex(arr));
