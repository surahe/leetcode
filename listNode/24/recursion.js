/**
  关注最小子结构，即将两个节点进行逆转。
  将逆转后的尾节点.next 指向下一次递归的返回值
  返回逆转后的链表头节点（ps:逆转前的第二个节点）
 */

var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let nextNode = head.next;

  head.next = swapPairs(nextNode.next);
  nextNode.next = head;
  return nextNode;
};