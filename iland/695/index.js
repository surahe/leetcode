/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  var res = 0

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        res = Math.max(res, dfs(grid, i, j))
      }
    }
  }
  return res

  // 模板
  function dfs(grid, r, c) {
    // 超出界限的，返回0
    if (!inArea(grid, r, c)) {
      return 0
    }

    // 已访问的或者非岛屿，返回0
    if (grid[r][c] != 1) {
      return 0
    }

    // 将格子标记为「已遍历过」
    grid[r][c] = 2

    // 计算面积
    return 1 + dfs(grid, r - 1, c) + dfs(grid, r + 1, c) + dfs(grid, r, c - 1) + dfs(grid, r, c + 1)
  }

  // 模板
  function inArea(grid, row, col) {
    return 0 <= row && row < grid.length && 0 <= col && col < grid[0].length
  }
};