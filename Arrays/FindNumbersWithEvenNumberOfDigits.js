var findNumbers = function (nums) {
  let evendigitedNumber = 0;
  nums.forEach((item) => {
    let digitcount = 1;
    while (true) {
      if (item < 10) {
        break;
      }
      item = item / 10;
      digitcount += 1;
    }
    if (digitcount % 2 === 0) {
      evendigitedNumber += 1;
    }
  });
  return evendigitedNumber;
};
