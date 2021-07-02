/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {

  if (head === null || head.next === null) return head

  let len = 1
  let cur = head
  while (cur.next !== null) {
    len++
    cur = cur.next;
  }
  //和第三种解法一样，对于k超过链表长度的问题，直接取模即可
  var index = len - (k % len) - 1;
  cur.next = head;

  for (let i = 0; i < index; i++) {
    head = head.next;
  }

  var newHead = head.next;
  //断开头尾节点
  head.next = null;
  return newHead;

};