function readBinaryWatch(turnedOn) {
  var hours = [1, 2, 4, 8]
  var mins = [1, 2, 4, 8, 16, 32]
  var res = []

  function backtrack(cnt, fromIdx, hour, min) {
    // 提前剪枝
    if (hour > 11 || min > 59 || cnt < 0) {
      return;
    }
  
    // 满足条件的收集
    if (cnt == 0) {
      res.push(getTimeStr(hour, min));
    }

  
    // 回溯就是穷举递归 搜索完所有条件  去除不满足的条件
    for (var i = fromIdx; i < 10; i++ ) {
      // 前面四位数字是挑选小时  后面6位数字是挑选分钟
      // 每次可选数量减一  从后面一个数字开始挑选
      if (i < 4) {
        // 灯0,index 1, 1小时,0分钟
        backtrack(cnt - 1, i + 1, hour + hours[i], min);
      } else {
        backtrack(cnt - 1, i + 1, hour, min + mins[i - 4]);
      }
    }
  }

  function getTimeStr(hour, min) {
    return hour + ":" + ((min < 10) ? "0" + min : min);
  }

  backtrack(turnedOn, 0, 0, 0);
  return res;
}

console.log(
  readBinaryWatch(1)
)