// 在一个有序数组中，找到 >= 某个数最左侧的位置
function nearestLeftIndex(arr, value) {
  // 在 arr上 找到满足 >= value最左侧的位置
  let L = 0;
  let R = arr.length - 1;
  let index = -1; // 记录最左侧的
  while (L <= R) {
    let mid = L + ((R - L) >> 1);
    if (arr[mid] >= value) {
      index = mid;
      R = mid - 1;
    } else {
      L = mid + 1;
    }
  }
  return index;
}
// 在一个有序数组中，找到 <= 某个数最右侧的位置
function nearestRightIndex(arr, value) {
  // 在 arr上 找到满足 >= value最左侧的位置
  let L = 0;
  let R = arr.length - 1;
  let index = -1; // 记录最左侧的
  while (L <= R) {
    let mid = L + ((R - L) >> 1);
    if (arr[mid] >= value) {
      index = mid;
      R = mid - 1;
    } else {
      L = mid + 1;
    }
  }
  return index;
}
console.log(nearestLeftIndex([5, 6, 7, 9, 10, 12, 15], 11));
console.log(nearestRightIndex([5, 6, 7, 9, 10, 12, 15], 11));
