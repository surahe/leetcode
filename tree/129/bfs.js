function sumNumbers(root) {
  let sum = 0;
  let curLevel = [];
  if (root) {
    curLevel.push(root);
  }
  while (curLevel.length) {
    let nextLevel = [];
    for (let i = 0; i < curLevel.length; i++) {
      let cur = curLevel[i];
      if (cur.left) {
        cur.left.val = cur.val * 10 + cur.left.val;
        nextLevel.push(cur.left);
      }
      if (cur.right) {
        cur.right.val = cur.val * 10 + cur.right.val;
        nextLevel.push(cur.right);
      }
      if (!cur.left && !cur.right) {
        sum += cur.val;
      }
      curLevel = nextLevel;
    }
  }
  return sum;
}