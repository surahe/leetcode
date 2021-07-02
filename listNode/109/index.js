var sortedListToBST = function (head) {
  if (!head) return null;
  return dfs(head, null);
};

function dfs(head, tail) {
  if (head == tail) return null;
  let fast = head;
  let slow = head;
  // 找到中点位置
  while (fast != tail && fast.next != tail) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let root = new TreeNode(slow.val);
  root.left = dfs(head, slow);
  root.right = dfs(slow.next, tail);
  return root;
}