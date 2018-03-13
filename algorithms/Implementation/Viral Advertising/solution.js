function viralAdvertising(n) {
  // Complete this function

  let day = 2;
  sum = 2;
  for (let i = 1; i < n; i++) {
    day = Math.floor(day * 3 / 2);
    sum += day;
  }
  return sum;
}
