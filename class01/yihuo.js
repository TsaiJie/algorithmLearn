function swap(a, b) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
}
//  一个数组中有一种数出现了奇数次， 其他数都出现了偶数次， 怎么找到并打印这种数
function printOddTimesNum1(arr) {
  let eor = 0;
  for (let i = 0; i < arr.length; i++) {
    eor ^= arr[i];
  }
  console.log(eor);
}

