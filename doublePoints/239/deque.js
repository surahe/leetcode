var maxSlidingWindow = function (nums, k) {
  const res = [];
  const dequeue = new Dequeue([]);
  // 前 k - 1 个数入队
  for (let i = 0; i < k - 1; i++) {
    dequeue.push(nums[i]);
  }

  // 滑动窗口
  for (let i = k - 1; i < nums.length; i++) {
    dequeue.push(nums[i]);
    res.push(dequeue.max());
    dequeue.shift(nums[i - k + 1]);
  }
  return res;
};

class Dequeue {
  constructor(nums) {
    this.list = nums;
  }

  push(val) {
    const nums = this.list;
    // 保证数据从队头到队尾递减
    while (nums[nums.length - 1] < val) {
      nums.pop();
    }
    nums.push(val);
  }

  // 队头出队
  shift(val) {
    let nums = this.list;
    if (nums[0] === val) {
      // 这里的js实现shift()理论上复杂度应该是O(k), 就不去真实实现一个O(1)出队的队列了，意思到位即可
      nums.shift();
    }
  }

  max() {
    return this.list[0];
  }
}