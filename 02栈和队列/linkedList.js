function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let reverseList = function (head) {
  let pre = null;
  let next = null;
  while (head !== null) {
    // 记录一下head的下一个位置
    next = head.next;
    // head的next指向前一个结点
    head.next = pre;
    // 前一个结点记录下当前head的位置
    pre = head;
    head = next;
  }
  return pre;
};
let reverseDoubleList = function (head) {
  let pre = null;
  let next = null;
  while (head !== null) {
    // 记录一下head的下一个位置
    next = head.next;
    // head的next指向前一个结点
    head.next = pre;
    head.pre = next;
    // 前一个结点记录下当前head的位置
    pre = head;
    head = next;
  }
  return pre;
};

let deleteNode = function (head, val) {
  while (head.val === val) {
    head = head.next;
  }
  // 此时头部处理完成
  let pre = head;
  let cur = head;
  while (cur != null) {
    if (cur.val === val) {
      // 把相等的跳过
      pre.next = cur.next;
    } else {
      // pre记录的上一个不等于val 的位置
      pre = cur;
    }
    cur = cur.next;
  }
  return head;
};
