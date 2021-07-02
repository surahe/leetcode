/**
 *
 *
 * @param {*} nums
 */

var removeDuplicates = function (nums) {
  var read = 0
  var write = 0

  while (read < nums.length) {
    if (nums[read] !== nums[write]) {
      write++
      nums[write] = nums[read]
    }
    read++
  }
  return write + 1
};