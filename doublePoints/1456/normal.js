/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  var left = 0
  var res = 0
  var list = ['a', 'e', 'i', 'o', 'u']
  var sum = 0 //来计数元音出现的次数

  for (var i in s.slice(0, k)) {
    if (list.indexOf(s[i]) >= 0) res++
  }
  sum = res

  while (left <= s.length) {
    var out_word = s[left]
    var in_word = s[left + k]
    if (list.indexOf(in_word) >= 0) sum++
    if (list.indexOf(out_word) >= 0) sum--

    left++
    res = Math.max(res, sum)
  }
  return res
}

console.log(
  maxVowels('aeiou', 2)
)