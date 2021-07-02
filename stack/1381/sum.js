/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.stack = []
  this.maxSize = maxSize
  this.incrementals = new Array(maxSize).fill(0)
  this.cnt = 0
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.stack.length < this.maxSize){
    this.cnt++
    return this.stack.push(x)
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  if (!this.cnt) return -1
  if (this.cnt >=2) {
    this.incrementals[this.cnt -2] += this.incrementals[this.cnt - 1]
  }
  var ans = this.stack.pop() + this.incrementals[this.cnt - 1]
  this.incrementals[this.cnt - 1] = 0
  this.cnt--
  return ans
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  if (this.cnt) {
    this.incrementals[Math.min(this.cnt, k) - 1] += val
  }
};


