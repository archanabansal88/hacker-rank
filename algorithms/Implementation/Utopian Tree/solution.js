function utopianTree(n) {
  // Complete this function
  let height = 1;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      height = height * 2;
    } else {
      height++;
    }
  }
  return height;
}
