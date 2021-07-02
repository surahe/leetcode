/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {

  if (nums.length < 2) return nums
  var midNum = nums[0]
  var left = []
  var right = []
  
  for (var i = 1; i < nums.length; i++) {
    console.log(nums[i])
    // if (nums[i] < midNum) {
    //   left.push(nums[i])
    // } else {
    //   right.push(nums[i])
    // }
  }

  // return sortColors(left).concat(midNum, sortColors(right))
};

console.log(sortColors([2,0,2,1,1,0]))