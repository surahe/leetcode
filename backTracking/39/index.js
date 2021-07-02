/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  var res = []
  backTrack(candidates,0, [], 0);
  return res;

  function backTrack(nums, begin, track, sum) {
    // 触发结束条件
    if (sum >= target) {
      if (sum === target) {
        res.push(track.slice())
      }
      return
    }

    for (var i = begin; i < nums.length; i++) {
      // 做选择
      sum += nums[i]
      track.push(nums[i])

      // 进入下一层决策树
      backTrack(nums, i, track, sum)

      // 撤销选择
      sum -= nums[i]
      track.pop()
    }
  }
};

console.log(
  combinationSum([2, 3, 6, 7], 7)
)