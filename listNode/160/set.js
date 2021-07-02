/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  var data = new Set()
  while (headA) {
    data.add(headA)
    headA = headA.next
  }
  while (headB) {
    if (data.has(headB)) {
      return headB
    }
    headB = headB.next
  }
  return null
};