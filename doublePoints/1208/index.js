/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
  var left = 0
  var right = 0
  var sum = 0
  var res = 0

  while (right < s.length) {
    sum += Math.abs(s.charCodeAt(right) - t.charCodeAt(right))
    right++

    while (sum > maxCost) {
      sum -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left))
      left++
    }
    res = Math.max(res, right - left)
  }
  return res
};
