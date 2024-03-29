var result = []

/**
  什么时候使用 used 数组，什么时候使用 begin 变量

  排列问题，讲究顺序（即 [2, 2, 3] 与 [2, 3, 2] 视为不同列表时），
  需要记录哪些数字已经使用过，此时用 used 数组；

  组合问题，不讲究顺序（即 [2, 2, 3] 与 [2, 3, 2] 视为相同列表时），
  需要按照某种顺序搜索，此时使用 begin 变量。
 */

function backtrack(路径, 选择列表) {
  if (满足结束条件) {
    result.push(路径)
    return
  }

  for (选择 in 选择列表) {
    // 做选择
    将该选择从选择列表移除
    路径.push(选择)

    backtrack(路径, 选择列表)

    // 撤销选择
    路径.pop()
    将该选择再加入选择列表
  }
}