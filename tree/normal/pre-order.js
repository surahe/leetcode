const tree = require('./tree')

function preorder(root) {
  if (!root) return

  console.log(root.val)

  preorder(root.left)
  preorder(root.right)
}

var res = new tree([1,2,3,null,4,null,5])
console.log(res)

preorder(res)