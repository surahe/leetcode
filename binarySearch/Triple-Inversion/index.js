/**
 * https://leetcode-solution.cn/solutionDetail?type=3&id=31&max_id=2
 * https://binarysearch.com/problems/Triple-Inversion
 * 
 * 遍历数组，在arr中找到比num*3要大的数的个数，用res累加
 * 通过bisect_right 二分获取 arr 中第一个比num*3要大的数的下标，用list.length减去后得到数量
 * js没有相关数据结构，只能模拟，用sort排序
 */

class Solution {
  solve(nums) {
    // 有序数组
    var arr = []
    var res = 0

    for (var i = 0; i < nums.length; i++) {
      if (i === 0) {
        arr.push(nums[i])
        continue
      }

      // 找到比 nums[i] * 3 还要大的数的个数
      res += list.length - bisect_right(arr, nums[i] * 3)
      arr.push(nums[i])
      arr.sort((a, b) => a - b)
    }
    return res

    // 寻找最右边的满足条件的值
    function bisect_right(list, target) {
      var left = 0
      var right = list.length - 1
      while (left <= right) {
        var mid = Math.floor((left + right) / 2)
        if (list[mid] <= target) {
          left = mid + 1
        } else {
          right = mid - 1
        }
      }
      return left
    }
  }
}