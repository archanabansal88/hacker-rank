function divisibleSumPairs(n, k, ar) {
  // Complete this function
  var count = 0;
  for (var i = 0; i < ar.length; i++) {
    for (var j = i + 1; j < ar.length; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        count++;
      }
    }
  }
  return count;
}
