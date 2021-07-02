// 719. 找出第 k 小的距离对

var smallestDistancePair = function (nums, k) {
  nums.sort((a, b) => a - b) // 排个序
  const len = nums.length
  let left = 0, right = nums[len - 1] - nums[0] // [left,right] 是距离差的范围

  // 在 nums 中，距离差小于 num 的数量
  function smallestNum(num) {
    let count = 0
    let start = 0
    // 以 i 为终点求距离差小于 mid 的数量
    for (let i = 1; i < len; i++) {
      while (nums[i] - nums[start] > num) {
        start++
      }
      // [start,i] 的值之差，都小于 num 了
      // 由于求的是距离差，所以 start<i 的，所以数量是 i-start
      count += i - start
    }
    return count
  }

  while (left <= right) {
    let mid = Math.floor((left + right)/2)
    if (smallestNum(mid) >= k) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return left
};

console.log(
  smallestDistancePair([1,2,3,5] ,3)
)