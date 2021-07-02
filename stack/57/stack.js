// 单调栈


/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  var res = []
  var i = 0
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i])
    i++
  }

  function intersected(a,b) {
    if (b[0] > a[1] || b[1] < a[0]) {
      return false
    }
    return true
  }

  while (i < intervals.length && intersected(intervals[i], newInterval)) {
    newInterval = [Math.min(intervals[i][0], newInterval[0]),
    Math.max(intervals[i][1], newInterval[1])
    ]
    i++
  }
  res.push(newInterval)
  while (i < intervals.length) {
    res.push(intervals[i])
    i++
  }
  return res
}