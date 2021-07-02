/* 主函数，输入一组不重复的数字，返回它们的全排列 */
function permute(nums) {
  var res = []
  backtrack(nums, []);
  return res;

  // 路径：记录在 track 中
  // 选择列表：nums 中不存在于 track 的那些元素
  // 结束条件：nums 中的元素全都在 track 中出现
  function backtrack(nums, track) {
    // 触发结束条件
    if (track.length == nums.length) {
      // 浅复制track
      res.push(track.slice());
      return;
    }

    for (var i = 0; i < nums.length; i++) {
      // 排除不合法的选择
      if (track.indexOf(nums[i]) >= 0)
        continue;

      // 做选择
      track.push(nums[i]);

      // 进入下一层决策树
      backtrack(nums, track);

      // 取消选择
      track.pop();
    }
  }
}

permute([1, 2, 3])
console.log(res)