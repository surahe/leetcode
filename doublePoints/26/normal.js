var removeDuplicates = function (nums) {
  var preNum = null
  var len = 0
  var i = 0
  var sliceNum = 0 // 修正遍历时 i 指向错误

  while (i < nums.length) {
    if (nums[i - sliceNum] === preNum) {
      var num = nums.splice(i - sliceNum, 1)
      sliceNum++
      nums.push(num[0])
    } else {
      len++
      preNum = nums[i - sliceNum]
    }
    i++
  }
  return len
};