function pickingNumbers(a) {
  // Complete this function
  a.sort((a, b) => a - b);
  let maxCount = -999999;
  for (let i = 0; i < a.length; i++) {
    max = 0;
    for (let j = i + 1; j < a.length; j++) {
      diff = Math.abs(a[i] - a[j]);
      if (diff > 1) {
        break;
      }
      max++;
      if (max > maxCount) {
        maxCount = max;
      }
    }
  }
  return maxCount + 1;
}
