/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let res = [];
  // 存放nums数组元素的下标，最左边下标对应的nums的值最大，stack对应的nums的元素是单调递减的
  let stack = [];

  for (let i = 0; i < nums.length; i++) {
    // 如果窗口最左边的元素对应的nums的数已经不在窗口中，需要把stack最左边的元素删掉，
    // 因为当前窗口的最大值已经变了
    if (stack.length && stack[0] <= i - k) {
      stack.shift();
    }

    const num = nums[i];
    // 维持单调递减
    // 新加入的元素比stack(从右往左)元素的对应的nums值大，则删除stack的元素
    while (stack.length && nums[stack[stack.length - 1]] < num) {
      stack.pop();
    }

    // 加入新元素的下标
    stack.push(i);

    // 判断是否等于或超过第一个窗口，是的话加入最大元素nums[stack[0]]
    if (i >= k - 1) {
      res.push(nums[stack[0]]);
    }
  }

  return res;
};