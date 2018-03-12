function hurdleRace(k, height) {
  // Complete this function
  let maxHeight = Math.max(...height);
  if (maxHeight > k) {
    return maxHeight - k;
  } else {
    return 0;
  }
}
