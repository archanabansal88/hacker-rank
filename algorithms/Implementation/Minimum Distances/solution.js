function minimumDistances(a) {
  // Complete this function
  let min = 99999999999;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) {
        diff = Math.abs(i - j);
        min = Math.min(diff, min);
      }
    }
  }
  return min === 99999999999 ? -1 : min;
}
