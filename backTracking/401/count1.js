/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 */

// @lc code=start
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
  const res = []
  // 遍历  0:00 -> 12:00   每个时间有多少1
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 60; j++) {
      if (count1(i) + count1(j) === turnedOn) {
        res.push(i + ':' + (j < 10 ? '0' + j : j))
      }
    }
  }

  return res
};

// 统计二进制中1的个数
function count1(n) {
  let res = 0
  while (n != 0) {
    n = n & (n - 1)
    res++
  }

  return res
}
// @lc code=end