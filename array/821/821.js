/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
  var length = s.length

  var left = []
  var i = 0
  var j = 0

  var right = []
  var k = 0
  var l = 0

  while (i < length) {
    if (s[i]!== c) {
      j++
    } else {
      for (var index = j; index >= 0; index--) {
        left.push(index)
        j = 0
      }
    }
    i++
  }
  // 如果后面没有
  for (var t1 = left.length; t1 < length; t1++) {
    left.push(99999)
  }

  let flag = true
  while (k < length) {
    if (s[k] !== c) {
      if (flag) {
        right.push(99999)
      } else {
        l++
      }
    } else {
      flag = false
      for (var index = 1; index <= l; index++) {
        right.push(index)
      }
      right.push(0)
      l = 0
    }
    k++
    if (k === length && l !== 0) {
      for (var index = 1; index <= l; index++) {
        right.push(index)
      }
    }
  }

  for (var i = 0; i < length ; i++) {
    if (right[i] < left[i]) {
      left[i] = right[i]
    }
  }
  return left
};