/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  var res = []
  var map = new Map()
  if (!words === null || !words.length) return res

  words.forEach(item => {
    map.set(item, (map.has(item) ? map.get(item) : 0) + 1)
  })

  var sLen = s.length
  var wordLen = words[0].length
  var count = words.length

  for (var i = 0; i < sLen - wordLen * count + 1; i++) {
    //得到当前窗口字符串
    var cur = s.substring(i, i + wordLen * count);
    var temp = new Map();
    var j = 0;
    for (; j < cur.length; j += wordLen) {
      var word = cur.substring(j, j + wordLen);
      // 剪枝
      if (!map.has(word)) {
        break;
      }

      temp.set(word, (temp.has(word) ? temp.get(word) : 0) + 1);

      // 剪枝
      if (temp.get(word) > map.get(word)){
        break;
      }
    }
    if (j == cur.length) {
      res.push(i);
    }
  }
  return res;
}

console.log(
  findSubstring(
    "barfoothefoobarman",
    ["foo", "bar"]
  )
)