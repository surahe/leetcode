var searchInsert = function (nums, target) {

  var left = 0
  var right = nums.length - 1

  while (left <= right) {
    var mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) return mid
    if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return left
};

searchInsert([1,3,5,6], 2)