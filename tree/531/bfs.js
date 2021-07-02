var findBottomLeftValue = function (root) {
  let curLevel = [root];
  let res = root.val;
  while (curLevel.length) {
    let nextLevel = [];
    for (let i = 0; i < curLevel.length; i++) {
      curLevel[i].left && nextLevel.push(curLevel[i].left);
      curLevel[i].right && nextLevel.push(curLevel[i].right);
    }
    res = curLevel[0].val;
    curLevel = nextLevel;
  }
  return res;
};
