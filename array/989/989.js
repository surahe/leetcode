var addToArrayForm = function (num, k) {
  var result = []
  var k_arr = k.toString().split('')
  var max_length = num.length > k_arr.length ? num.length + 1 : k_arr.length + 1
  var digit = Array(max_length).fill(0)
  var now_res

  for (var i = num.length; i < max_length; i++) {
    num.unshift(0)
  }
  for (var i = k_arr.length; i < max_length; i++) {
    k_arr.unshift(0)
  }

  for (var i = max_length - 1; i >= 0; i--) {
    if (digit[i] + num[i] + +k_arr[i] >= 10) {
      digit[i-1] = 1
      now_res = digit[i] + num[i] + +k_arr[i] - 10
    } else {
      now_res = digit[i] + num[i] + +k_arr[i]
    }
    result.unshift(now_res)
  }

  if (result[0] === 0) {
    result.shift()
  } 

  return result
};

console.log(addToArrayForm([1,2,0,0], 34))