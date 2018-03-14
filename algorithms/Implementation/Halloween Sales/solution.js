function howManyGames(p, d, m, s) {
  // Return the number of games you can buy
  let count = 1,
    sum = p;
  if (p > s) {
    return 0;
  }
  while (sum <= s) {
    p = p - d;
    if (p <= m) {
      sum += m;
    } else {
      sum += p;
    }
    if (sum <= s) {
      count++;
    }
  }
  return count;
}
