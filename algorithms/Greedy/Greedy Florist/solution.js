function getMinimumCost (n, k, c) {
  // Complete this function
  let total = 0
  c.sort((a, b) => b - a)
  if (k >= n) {
    return c.reduce((prev, curr) => prev + curr)
  } else {
    for (let i = 0; i < n; i++) {
      total += Math.floor(i / k + 1) * c[i]
    }
    return total
  }
}
