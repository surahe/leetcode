var findBottomLeftValue = function (root) {
  var res = [root]
  var val = []
  var node

  while (res.length) {
    node = res.shift()
    val.push(node.val)
    node.right && res.push(node.right)
    node.left && res.push(node.left)
  }

  return val.slice(-1)
};