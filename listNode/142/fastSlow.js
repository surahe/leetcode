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
  if (head == null || head.next == null) return null;
  var fast = head
  var slow = head

  do {
    if (fast != null && fast.next != null) {
      fast = fast.next.next;
    } else {
      fast = null;
    }
    slow = slow.next;
  } while (fast != slow);

  if (fast === null) {
    return null
  }

  fast = head
  while (fast !== slow) {
    fast = fast.next
    slow = slow.next
  }
  return fast
};

var detectCycle = function (head) {
  if (head === null) {
    return null;
  }
  let slow = head, fast = head;
  while (fast !== null) {
    slow = slow.next;
    if (fast.next !== null) {
      fast = fast.next.next;
    } else {
      return null;
    }
    // 首次相遇
    if (fast === slow) {
      // 让快指针回到头节点
      fast = head;
      while (fast !== slow) {
        fast = fast.next;
        slow = slow.next;
      }
      // 再次相遇，在入环处
      return fast;
    }
  }
  return null;
};