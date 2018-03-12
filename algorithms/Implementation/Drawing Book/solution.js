function solve(n, p) {
  // Complete this function
  let backCount;
  let frontCount = parseInt(p / 2);
  if (n % 2 === 0) {
    backCount = Math.ceil((n - p) / 2);
  } else {
    backCount = Math.floor((n - p) / 2);
  }

  return Math.min(frontCount, backCount);
}
