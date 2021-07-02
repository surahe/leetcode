const tree = require('../normal/tree')
function bfs(root) {
  if (!root) return [];
  const view = new Map();
  const queue = [[root, 0]];

  while (queue.length) {
    const [node, cor] = queue.shift();

    if (!view.has(cor)) view.set(cor, node.val);

    node.left && queue.push([node.left, cor - 1]);
    node.right && queue.push([node.right, cor + 1]);
  }

  const res = [...view.entries()].sort((a, b) => a[0] - b[0]);

  return res.map(([k, v]) => v);
}

var res = new tree([1,2,3,null,4,null,5])


bfs(res)