/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x == 0 || x == 1) {
    return x;
  }
  var left = 0
  var right = Math.floor(x / 2)
  // var ans = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid <= x) {
      // ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  // return ans;
  return right
};
