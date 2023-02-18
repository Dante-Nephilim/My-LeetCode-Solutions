var replaceElements = function (arr) {
  let a = 0;
  let b = 0;
  let max = 0;
  if (arr.length === 1) {
    return [-1];
  }
  while (a < arr.length - 1) {
    b++;
    if (b <= arr.length - 1) {
      if (max < arr[b]) {
        max = arr[b];
      }
      // console.log(arr[b])
    } else {
      arr[a] = max;
      max = 0;
      a = a + 1;
      if (a === arr.length - 1) {
        arr[a] = -1;
        break;
      } else {
        b = a;
      }
    }
  }
  return arr;
};
