/**
 * 
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
  let n = grid.length;
  let low = grid[0][0];
  let high = n * n; // 条件限制了grid[i][j] 位于区间 [0, ..., N*N - 1] 内

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (!isCanSwim(mid, grid)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
};

/**
* 在时间t是否可以游到最后一个节点
* @param {*} t 
* @param {*} grid 
*/
var isCanSwim = function (t, grid) {
  let n = grid.length;
  // n行n列的二维数组，都初始化为false，访问过的位置为true
  let visited = Array.from(Array(n), () => Array(n).fill(false));

  let dfs = function (row, col) {
    // 越界
    if (!inArea(grid, row, col)) {
      return false
    }

    // 已访问过 或 不可达
    if (visited[row][col] || grid[row][col] > t) {
      return false
    }

    // 到达了终点
    if (row == n - 1 && col == n - 1) {
      return true;
    }

    visited[row][col] = true;

    // 该位置的上 下 左 右 四个方向进行遍历
    return dfs(row + 1, col) || dfs(row - 1, col) || dfs(row, col + 1) || dfs(row, col - 1);
  }

  // 默认从第1个节点开始遍历
  return dfs(0, 0);
}