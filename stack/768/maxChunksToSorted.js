var maxChunksToSorted = function (arr) {
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    var a = arr[i];
    if (stack.length > 0 && stack[stack.length - 1] > a) {
      const cur = stack[stack.length - 1];
      while (stack && stack[stack.length - 1] > a) stack.pop();
      stack.push(cur);
    } else {
      stack.push(a);
    }
  }
  return stack.length;
};
console.log(maxChunksToSorted([1,2,3,2,2] ))