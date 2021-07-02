/**
 * 树的最后一行找到最左边的值，转化一下就是找第一个出现的深度最大的节点，
 * 这里用先序遍历去做，其实中序遍历也可以，只需要保证左节点在右节点前被处理即可
 * 先序遍历 root，维护一个最大深度的变量，记录每个节点的深度，
 * 如果当前节点深度比最大深度要大，则更新最大深度和结果项
 * 
 * @param {*} root 
 * @returns 
 */

function findBottomLeftValue(root) {
  let maxDepth = 0;
  let res = root.val;

  dfs(root.left, 0);
  dfs(root.right, 0);

  return res;

  function dfs(cur, depth) {
    if (!cur) {
      return;
    }
    const curDepth = depth + 1;
    if (curDepth > maxDepth) {
      maxDepth = curDepth;
      res = cur.val;
    }
    dfs(cur.left, curDepth);
    dfs(cur.right, curDepth);
  }
}