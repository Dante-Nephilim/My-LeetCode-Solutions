//Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

var sortedSquares = function (nums) {
  if (nums.length === 1) {
    return [nums[0] * nums[0]];
  }
  if (nums.length === 0) {
    return [];
  }
  let turningPoint = null;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      turningPoint = i;
      break;
    }
  }
  if (turningPoint === null) {
    let result = [];
    for (let i = nums.length - 1; i >= 0; i--) {
      result.push(nums[i] * nums[i]);
    }
    return result;
  }
  if (turningPoint === 0) {
    let result = [];
    for (let i = 0; i <= nums.length - 1; i++) {
      result.push(nums[i] * nums[i]);
    }
    return result;
  }
  let a = turningPoint - 1;
  let b = turningPoint;
  let result = [];
  while (a >= 0 || b <= nums.length - 1) {
    if (a >= 0 && b <= nums.length - 1) {
      if (Math.abs(nums[a]) > Math.abs(nums[b])) {
        result.push(nums[b] * nums[b]);
        b++;
      } else {
        result.push(nums[a] * nums[a]);
        a--;
      }
    }
    if (a < 0 && b <= nums.length - 1) {
      result.push(nums[b] * nums[b]);
      b++;
    }
    if (a >= 0 && b > nums.length - 1) {
      result.push(nums[a] * nums[a]);
      a--;
    }
  }

  return result;
};
