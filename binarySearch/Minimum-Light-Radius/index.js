/**
 * https://leetcode-solution.cn/solutionDetail?type=3&id=32&max_id=2
 * 
 * @param {*} nums 
 * @returns 
 */

function name(nums) {
  //能力检测二分
  nums.sort((a, b) => a - b) //O(NlogN)
  const N = nums.length
  if (N <= 3) return 0
  const LIGHTS = 3

  function bisect_right(nums, target) {
    //这里搜索的是直径的可能性，（直径 = 2 * 半径）
    var left = 0
    var right = nums.length - 1

    while (left <= right) {
      var mid = Math.floor((left + right) / 2)
      if (nums[mid] <= target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    return left
  }

  function possible(diameter) {
    //等价转换问题，就是L个LIGHTS以 diameter为直径的时候是否能cover每一个在nums中的元素
    //等价转换问题，就是有n个diameter，是否能cover每一个在nums中的元素
    //介于nums中的元素是不平均分布的。平均分布：[1,2,3,4] 不平均分布:[0,0,0,3]
    //可以枚举每段diameter的cover状况
    //枚举每段diameter的cover 状况 -> 二分法最右查找

    var start = nums[0]
    var end = start + diameter
    for (var i = 0; i < LIGHTS; i++) {
      var idx = bisect_right(nums, end)
      if (idx >= N) {
        return true
      }
      //这里是cover前一段了之后，下一个衔接继续cover
      //因为最右二分返回的index是  左边这个数小于等于target 
      //所以其实最右二分返回的index是第一个没法被上一个灯 cover到的house
      //所以我们在寻找下一个灯的时候，可以直接 oneLightStart = nums[idx]

      start = nums[idx]
      end = start + diameter
    }
    return false
  }

  var l = 0
  var r = nums[N - 1] - nums[0]
  while (l <= r) {
    var mid = Math.floor((l + r) / 2)
    if (possible(mid)) {
      r = mid - 1
    }
    else {
      l = mid + 1
    }
  }
  return l / 2
}