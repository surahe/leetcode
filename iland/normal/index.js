function dfs(grid, r, c) {
  // 判断 base case
  // 如果坐标 (r, c) 超出了网格范围，直接返回
  if (!inArea(grid, r, c)) {
    return;
  }
  // 访问上、下、左、右四个相邻结点
  dfs(grid, r - 1, c);
  dfs(grid, r + 1, c);
  dfs(grid, r, c - 1);
  dfs(grid, r, c + 1);
}

// 判断坐标 (r, c) 是否在网格中
function inArea(grid, r, c) {
  return 0 <= r && r < grid.length
    && 0 <= c && c < grid[0].length;
}