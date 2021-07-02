/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  var left = 0
  var right = 0
  var res = 0
  var window = {}

  while (right < nums.length) {
    var char = nums[right]
    var num = window[char]

    window[char] = num ? ++num : 1
    right++

    while (window['0'] > k) {
      window[nums[left]]--
      left++
    }
    res = Math.max(res, right - left)
  }

  return res
};

console.log(
  longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2)
)