/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  var map = new Array(m).fill(0).map(item => new Array(n).fill(0))
  for (var i = 0; i < m; i++) {
    map[i][0] = 1
  }
  for (var j = 0; j < n; j++) {
    map[0][j] = 1
  }
  for (var i = 1; i < m; i++) {
    for (var j = 1; j < n; j++) {
      map[i][j] = map[i - 1][j] + map[i][j - 1]
    }
  }
  return map[m - 1][n - 1]
};