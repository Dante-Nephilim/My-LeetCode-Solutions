var removeDuplicates = function (nums) {
  let start = 0;
  let end = 0;
  while (end <= nums.length - 1) {
    end++;
    if (nums[start] < nums[end]) {
      nums[start + 1] = nums[end];
      start++;
      end = start;
    }
  }
  return start + 1;
};
