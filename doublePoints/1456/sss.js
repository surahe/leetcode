/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  var left = 0
  var list = ['a', 'e', 'i', 'o', 'u']
  var res = 0
  while (left + k <= s.length) {
    var word = s.slice(left, left + k)
    var sum = 0
    for (var i = 0; i < k; i++) {
      if (list.indexOf(word[i]) >= 0) sum++
    }
    res = Math.max(sum, res)
    left++
  }
  return res
};

console.log(
  maxVowels("weallloveyou", 7)
)