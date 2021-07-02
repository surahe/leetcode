/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) return 0
  if (n === 1) return 1

  var a = 0
  var b = 1
  var temp

  for (var i = 2; i <= n; i++) {
    temp = a + b
    a = b
    b = temp
  }
  return temp
};