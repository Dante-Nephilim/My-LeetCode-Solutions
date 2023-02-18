var sortArrayByParity = function (nums) {
  if (nums.length !== 1 || nums.length !== 0) {
    let start = 0;
    let end = 0;
    while (end < nums.length - 1) {
      end++;
      if (nums[start] % 2 === 0 && nums[end] % 2 === 0) {
        start++;
      }
      if (nums[start] % 2 !== 0 && nums[end] % 2 === 0) {
        let temp = nums[end];
        nums[end] = nums[start];
        nums[start] = temp;
      }
    }
  }
  return nums;
};
