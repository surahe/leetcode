var rotateRight = function (head, k) {
  var len = 0
  var loop = head

  if (head == null || head.next === null) {
    return head
  }

  while (loop !== null) {
    len++
    loop = loop.next
  }

  k = k % len

  var fast = head
  var slow = head
  for (var i = 0; i < k; i++) {
    fast = fast.next
  }

  while (fast.next != null) {
    fast = fast.next
    slow = slow.next
  }

  fast.next = head
  var newList = slow.next
  slow.next = null
  return newList
}