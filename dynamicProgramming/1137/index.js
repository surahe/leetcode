/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n === 0) return 0
  if (n === 1) return 1
  if (n === 2) return 1

  var temp
  var a = 0
  var b = 1
  var c = 1

  for (var i = 3; i <= n; i++) {
    temp = a + b + c
    a = b
    b = c
    c = temp
  }
  return temp
};