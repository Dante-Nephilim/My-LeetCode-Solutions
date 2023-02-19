//Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.
let nums = [1, 2, -2147483648];
var thirdMax = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return nums[0] > nums[1] ? nums[0] : nums[1];
  }
  let first = null;
  let second = null;
  let third = null;
  for (let i = 0; i < nums.length; i++) {
    if (first < nums[i] || (first === null && nums[i] <= 0)) {
      let temp1, temp2;
      temp1 = first;
      temp2 = second;
      first = nums[i];
      second = temp1;
      third = temp2;
    } else if (
      (first > nums[i] && second < nums[i]) ||
      (second === null && nums[i] <= 0)
    ) {
      let temp = second;
      second = nums[i];
      third = temp;
    } else if (
      (first > nums[i] && second > nums[i] && third < nums[i]) ||
      (third === null && nums[i] <= 0)
    ) {
      third = nums[i];
    }
  }
  return third !== null && third !== second ? third : first;
};
console.time('thirdMax');
console.log(thirdMax(nums));
console.timeEnd('thirdMax');
