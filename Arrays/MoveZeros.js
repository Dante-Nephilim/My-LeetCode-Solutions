var moveZeroes = function (nums) {
  if (nums.length !== 1 || nums.length !== 0) {
    let start = 0;
    let end = 0;
    while (end < nums.length - 1) {
      end++;
      if (nums[start] !== 0 && nums[end] !== 0) {
        start++;
      }
      if (nums[start] === 0 && nums[end] !== 0) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
      }
    }
  }
};
