const tree = require('../normal/tree')
var res = new tree([4, 9, 0, 5, 1])

function sumNumbers(root) {
  let sum = 0;
  function dfs(root, cur) {
    if (!root) {
      return;
    }
    let curSum = cur * 10 + root.val;
    if (!root.left && !root.right) {
      sum += curSum;
      return;
    }
    dfs(root.left, curSum);
    dfs(root.right, curSum);
  }
  dfs(root, 0);
  return sum;
}