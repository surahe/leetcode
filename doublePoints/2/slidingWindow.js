function lengthOfLongestSubstring(arr) {
  var left = 0
  var right = 0
  var len = arr.length
  var window = {}
  var res = 0


  while (right < len) {
    var char = arr[right]
    var num = window[char]
    window[char] = num ? ++num : 1
    right++

    while (window[char] > 1) {
      window[arr[left]]--
      left++
    }
    res = Math.max(res, right - left)
  }
  return res
}

console.log(
  lengthOfLongestSubstring("pwwkew")
)