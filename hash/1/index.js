/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function (nums, target) {
  var hash = {}
  var res = []
  nums.forEach((item, index) => {
    if (hash[target - item]) {
      hash[target - item].push(index)
    } else {
      hash[target - item] = [index]
    }
  })

  nums.forEach((item, index) => {
    if (hash[item]) {
      if (hash[item].length > 1) {
        res = hash[item]
      } else {
        if (hash[item][0] !== index)
        res = res.concat(hash[item])
      }
    }
  })
  return res.sort((a, b) => a - b)
};