var validMountainArray = function (arr) {
  let a = 0;
  let b = 0;
  let max = null;
  while (b < arr.length - 1) {
    if (max === null) {
      if (arr[a] < arr[a + 1]) {
        a++;
        b++;
      } else if (arr[a] === arr[a + 1]) {
        return false;
      } else {
        b++;
        max = arr[a];
      }
    } else {
      if (arr[b] > arr[b + 1]) {
        b++;
      } else {
        return false;
      }
    }
  }
  if (max === null || max == arr[0]) {
    return false;
  }
  return true;
};
