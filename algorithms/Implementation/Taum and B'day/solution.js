function taumBday(b, w, x, y, z) {
  // Complete this function
  x = y + z < x ? y + z : x;
  y = x + z < y ? x + z : y;

  var a = new BigNumber(b);
  var d = new BigNumber(w);
  var e = d.times(y);
  return a.times(x).plus(e);
}
