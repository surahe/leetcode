var subarraysDivByK = function (nums, K) {
  // 代表求第 0 项前缀和之前，前缀和 mod K 等于 0 这种情况出现了 1 次
  let map = { 0: 1 }
  let result = 0
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    // 目的是当 presum 为负数的时候纠正为正数
    let preSumK = (sum % K + K) % K
    if (map[preSumK]) {
      result += map[preSumK] // 对应的次数累加给count
      map[preSumK]++
    } else {
      map[preSumK] = 1
    }
  }
  return result
};