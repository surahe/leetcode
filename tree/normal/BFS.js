const tree = require('./tree')

function bfs(root) {
  var queue = [root]
  var res = []
  while (queue.length) {
    var node = queue.shift()
    res.push(node.val)
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
  }
  return res
}
var res = new tree([1,2,3,null,4,null,5])


console.log(bfs(res))

function cengxu(root) {
  var curLevel = [root]
  var result = []
  while (curLevel.length) {
    var nextLevel = []
    var curVal = []
    for (var i = 0; i < curLevel.length; i++) {
      curVal.push(curLevel[i].val)
      if (curLevel[i].left) nextLevel.push(curLevel[i].left)
      if (curLevel[i].right) nextLevel.push(curLevel[i].right)
    }
    curLevel = nextLevel
    result.push(curVal)
  }
  return result
}

console.log(cengxu(res))
