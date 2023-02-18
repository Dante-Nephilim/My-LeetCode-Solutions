var checkIfExist = function (arr) {
  let a = 0;
  let b = 1;
  while (a < arr.length - 1) {
    if (arr[b] == 2 * arr[a] || arr[a] == 2 * arr[b]) {
      return true;
    }
    if (b == arr.length - 1) {
      a++;
      b = a + 1;
    } else {
      b++;
    }
  }
  return false;
};
