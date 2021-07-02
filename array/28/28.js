var strStr = function (haystack, needle) {
  var m = haystack.length
  var n = needle.length

  for (var i = 0; i + n < m; i++) {
    var flag = true
    for (var j = 0; j < n; j++) {
      if (haystack[i + j] !== needle[j]) {
        flag = false
        break
      }
    }
    if (flag) {
      return i
    }
  }
  return -1
}