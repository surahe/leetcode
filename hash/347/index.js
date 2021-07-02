/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

//  输入: nums = [1,1,1,2,2,3], k = 2
//  输出: [1,2]

// {1: 3, 2: 2, 3: 1}

var topKFrequent = function(nums, k) {
  var map = new Map()

  nums.forEach((item, index) => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1)
    } else {
      map.set(item, 1)
    }
  })

  // map转成数组是二维数组
  const resultArr = Array.from(map)
  // 所以是对二维数组的第二个值进行排序
  resultArr.sort((a,b) => { return b[1] - a[1]})

  return resultArr.slice(0, k).map(item => item[0])
};