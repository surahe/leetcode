
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
  if (!root) { return false }
  //定义一个嵌套哈希表
  let hashmap = {};

  function dfs(root, x, y) {
    if (!root) { return; }
    if (!hashmap[y]) { hashmap[y] = {} }
    if (!hashmap[y][x]) { hashmap[y][x] = [] }

    hashmap[y][x].push(root.val);
    dfs(root.left, x + 1, y - 1);
    dfs(root.right, x + 1, y + 1);
  }

  dfs(root, 0, 0)

  //先将哈希表按照Y坐标递增排序
  let sortedY = Object.keys(hashmap)
    .sort((a, b) => (a - b))
    .map((key) => hashmap[key])
  // console.log(sortedY) 
  //这里的sortedY是个数组，里面的元素是对象

  //再将哈希表按照X坐标递增排序
  let sortedX = [];
  for (let i = 0; i < sortedY.length; i++) {
    sortedX[i] = Object.keys(sortedY[i])
      .sort((a, b) => (a - b))
      .map((key) => sortedY[i][key])
  }

  //这里的sortedX是个数组，里面的元素是数组
  //再将X，Y坐标一样的数字进行递增排序
  let ans = [];
  for (let i = 0; i < sortedX.length; i++) {
    let sorted = [];
    for (let j = 0; j < sortedX[i].length; j++) {
      if (sortedX[i][j].length > 1) {
        sortedX[i][j]
          .sort((a, b) => (a - b))
          .forEach((item) => sorted.push(item))
      } else {
        sorted.push(sortedX[i][j][0])
      }
    }
    ans.push(sorted)
  }
  return ans

};