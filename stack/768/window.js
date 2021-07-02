// 滑动窗口

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
  var sortArr = [...arr]
  var sumA = 0
  var sumB = 0
  var result = 0
  sortArr = sortArr.sort((a, b) => a-b)
  
  for (var i = 0; i < arr.length; i++) {
    sumA += arr[i]
    sumB += sortArr[i]

    if (sumA === sumB) {
      result++
    }
  }
  return result
};
