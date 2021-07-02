/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.mainStack = []
  this.subStack = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  return this.mainStack.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.mainStack.length) {
    this.subStack.push(this.mainStack.pop())
  }

  let top = this.subStack.pop()
  while (this.subStack.length) {
    this.mainStack.push(this.subStack.pop())
  }
  return top
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (this.mainStack.length) {
    this.subStack.push(this.mainStack.pop())
  }

  let top = this.subStack.pop()
  this.subStack.push(top)
  while (this.subStack.length) {
    this.mainStack.push(this.subStack.pop())
  }
  return top
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.mainStack.length && !this.subStack.length
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

var myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]

myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)

console.log(myQueue.peek())
// return 1

console.log(myQueue.pop() )
// return 1, queue is [2]

myQueue.empty(); // return false
