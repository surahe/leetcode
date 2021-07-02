
var findNumberOfLIS = function (nums) {
  let len = nums.length
  let dp = new Array(len).fill(1)
  let count = new Array(len).fill(1)
  let ans = 0
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        // Math.max...的写法
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1
          count[i] = count[j] // 最长递增子序列的个数
          // 其实就是考虑相等的情况
        } else if (dp[j] + 1 === dp[i]) {
          count[i] += count[j]
        }
      }
    }
  }
  let max = Math.max(...dp)
  for (let i = 0; i < len; i++) if (dp[i] == max) ans += count[i]

  return ans
}