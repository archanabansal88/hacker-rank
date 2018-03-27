function maximizingXor (l, r) {
  // Complete this function
  let sum = 0
  let max = 0
  for (let i = l; i <= r; i++) {
    for (let j = l; j <= r; j++) {
      sum = i ^ j
      max = Math.max(sum, max)
    }
  }
  return max
}
