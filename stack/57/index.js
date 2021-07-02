/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  intervals.push(newInterval)
  intervals.sort((a, b) => a[0] - b[0])

  function intersected(a, b) {
    if (a[0] > b[1] || a[1] < b[0]) {
      return false
    }
    return true
  }

  function merge(a, b) {
    return [Math.min(a[0], b[0]), Math.max(a[1], b[1])]
  }

  for (var i = 0; i < intervals.length - 1; i++) {
    var cur = intervals[i]
    var next = intervals[i + 1]

    if (intersected(cur, next)) {
      intervals[i] = null
      intervals.splice(i + 1, 1, merge(cur, next))
    }
  }
  return intervals.filter(i => i !== null)
};
