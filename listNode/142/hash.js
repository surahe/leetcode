/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  var data = new Set()
  while (head) {
    if (data.has(head)) {
      return head
    } else {
      data.add(head)
    }
    head = head.next
  }
  return null
};