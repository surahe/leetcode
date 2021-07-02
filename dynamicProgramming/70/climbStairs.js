function climbStairs(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return climbStairs(n - 1) + climbStairs(n - 2);
}

var memo = new Map()
function climbStairs2(n) {
  if (n == 1) return 1
  if (n == 2) return 2
  if (memo.has(n))  return memo.get(n)
  var ans = climbStairs(n - 1) + climbStairs(n-2)
  memo.set(n, ans)
  return ans
}

function climbStairs3(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let a = 1;
  let b = 2;
  let temp;

  for (let i = 3; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }

  return temp;
}