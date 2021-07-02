var decodeString = function (s) {
  let mulStack = [], strStack = [], num = 0, res = ''
  for (const c of s) {
    if (!isNaN(c)) {
      num = num * 10 + (c - '0')
    } else if (c == '[') {
      strStack.push(res)
      mulStack.push(num)
      res = ''
      num = 0
    } else if (c == ']') {
      res = strStack.pop() + res.repeat(mulStack.pop())
    } else {
      res += c
    }
  }
  return res;
};

console.log(decodeString("3[a2[c]]"))