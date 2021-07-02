function TreeNode(val) {
  this.value = val;
}

var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null;
  }
  if (nums.length === 1) {
    return new TreeNode(nums[0]);
  }
  var mid = parseInt(nums.length / 2); // 计算中间位置,数组下标从0开始，所以parseInt取整
  var root = new TreeNode(nums[mid]);  // 中间位置的元素作为树根
  root.left = sortedArrayToBST(nums.slice(0, mid)); // 递归生成树的左子树
  root.right = sortedArrayToBST(nums.slice(mid + 1)); // 递归生成树的右子树
  return root; // 递归结束后返回树
}

var ss = sortedArrayToBST([-10, -3, 0, 5, 9]);
console.log(ss); // 打印结果