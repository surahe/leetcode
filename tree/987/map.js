
var verticalTraversal = function (root) {
  if (!root) return root
  const result = []

  // {col # => [[node.val, row], [node2.val, row2]...]}
  const memo = new Map();

  // [node, row number, col number]
  const queue = [[root, 0, 0]]

  while (queue.length) {
    const [node, row, col] = queue.shift()
    memo.set(col, (memo.get(col) || []).concat([[node.val, row]]))
    node.left && queue.push([node.left, row + 1, col - 1])
    node.right && queue.push([node.right, row + 1, col + 1])
  }

  // sort the keys
  let sorted = [...memo.keys()].sort((a, b) => a - b)

  for (const key of sorted) {
    let temp = memo.get(key)

    temp = temp.sort((a, b) => {
      //if rows do not match, return based on ASCD row #
      if (a[1] != b[1]) {
        return a[1] - b[1]
      }
      //if same rows, return based on node.val
      return a[0] - b[0]
    })

    result.push(temp.map((ele) => ele[0]))
  }
  return result;
};

