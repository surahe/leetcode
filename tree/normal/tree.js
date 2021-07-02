class Node {
  constructor(val) {
    this.val = val
    this.left =undefined
    this.right = undefined
  }
}

class Tree {
  constructor(data) {
    // 临时存储所有节点，方便寻找父子节点
    let nodeList = []
    // 顶节点
    let root
    for (let i = 0, len = data.length; i < len; i++) {
      let node = new Node(data[i])
      nodeList.push(node)
      if (i > 0) {
        // 计算当前节点属于哪一层
        let n = Math.floor(Math.sqrt(i + 1))
        // 记录当前层的起始点
        let q = Math.pow(2, n) - 1
        // 记录上一层的起始点
        let p = Math.pow(2, n - 1) - 1
        // 找到当前节点的父节点
        let parent = nodeList[p + Math.floor((i - q) / 2)]
        // 将当前节点和上一层的父节点做关联
        if (parent.left) {
          parent.right = node
        } else {
          parent.left = node
        }
      }
    }
    root = nodeList.shift()
    // 释放数组
    nodeList.length = 0
    return root
  }
}

module.exports = Tree