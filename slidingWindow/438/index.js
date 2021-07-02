/**
 * 
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  var left = 0
  var map = new Map()
  var res = []

  for (var i = 0; i < p.length; i++) {
    const c = p[i];
    // 放入字典表
    map.set(c, map.has(c) ? map.get(c) + 1 : 1);
  }

  let needType = map.size;

  for (var j = 0; j < p.length; j++) {
    const c = s[j];
    map.set(c, map.get(c) - 1);
    if (map.get(c) === 0) needType -= 1;
  }
  if (!needType) {
    res.push(0)
  }

  while (left + p.length < s.length) {
    var in_word = s[left + p.length]
    var out_word = s[left]

    if (map.has(in_word)) {
      map.set(in_word, map.get(in_word) - 1);
      if (map.get(in_word) === 0) needType -= 1;
    }
    if (map.has(out_word)) {
      map.set(out_word, map.get(out_word) + 1);
      if (map.get(out_word) === 1) needType += 1;
    }

    left++

    if (needType === 0) {
      res.push(left)
    }
  }
  return res
}
