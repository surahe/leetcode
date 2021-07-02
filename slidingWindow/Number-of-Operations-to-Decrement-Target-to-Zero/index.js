function as(nums, target) {
  if (!nums.length)  return target ? -1 : 0

  var res = nums.length + 1
  var left = 0
  var sum = 0

  target = nums.reduce((pre, cur) => pre + cur) - target

  nums.forEach((item, index) => {
    sum += item
    while (sum > target) {
      sum -= nums[left]
      left += 1
    }
    if (sum == target) {
      res = Math.min(res, nums.length - (index - left + 1))
    }
  })

  if (res == nums.length + 1) {
    return -1
  } else {
    return res
  }
}

console.log(
  as([3, 1, 1, 2, 5, 1, 1], 7)
)