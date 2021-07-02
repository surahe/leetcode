
/**
 * 寻找最右插入位置
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
function bisect_right(nums, target) {
  var left = 0
  var right = nums.length - 1

  while (left <= right) {
    var mid = Math.floor((left + right)/2)
    if (nums[mid] <= target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return left
}

console.log(
  bisect_right([1,2,2,2,3,4], 2)
)