/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  var arr = []
  
  var left = 0
  var len = s.length
  var res = []

  if (!words.length) return []

  var word_len = words[0].length

  while (left + word_len <= len) {
    var start = left
    var copy = words.slice()
    words.forEach(item => {
      var word = s.slice(start, start + word_len)
      var index = copy.indexOf(word)
      if (index >= 0) {
        arr.push(word)
        copy.splice(index, 1)
        if (copy.length ===0 ) {
          res.push(left)
        }
        start += word_len
      } else {
        start += 1
        arr = []
      }
    })
    left++
  }
  return res
};