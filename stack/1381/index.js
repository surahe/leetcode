/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.stack = []
  this.maxSize = maxSize
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.stack.length < this.maxSize)
  return this.stack.push(x)
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  if (!this.stack.length) return -1
  return this.stack.pop()
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  var num = Math.min(k, this.stack.length)
  for (var i = 0; i < num; i++) {
    this.stack[i] += val
  }
};