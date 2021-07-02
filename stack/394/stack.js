/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  var repeatStr = ''
  var stack = []
  var repeatCount = ''

  for (var i in s) {
    if (s[i]!== ']') {
      stack.push(s[i])
    } else {
      while (stack.length && stack.slice(-1)[0] !== '[') {
        repeatStr = stack.pop() + repeatStr
      }
      // pop 掉 "["
      stack.pop()
      while (stack.length &&  !isNaN(Number(stack.slice(-1)[0]))) {
        repeatCount = stack.pop() + repeatCount
      }
      stack.push(repeatStr.repeat(Number(repeatCount)))
      repeatStr = ''
      repeatCount = ''
    }
  }
  return stack.join('')
};

