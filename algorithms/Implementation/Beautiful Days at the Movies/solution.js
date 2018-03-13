function reverse(a) {
  var i = 0;
  var rn = 0;
  while (a > 0) {
    i = a % 10;
    rn = rn * 10 + i;
    a = a / 10;
    a = parseInt(a);
  }
  return rn;
}
function beautifulDays(i, j, k) {
  // Complete this function
  let count = 0;
  for (let x = i; x <= j; x++) {
    var reverseNum = reverse(x);
    if ((x - reverseNum) % k === 0) {
      count++;
    }
  }
  return count;
}
