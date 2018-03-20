function maximumToys (prices, k) {
  // Complete this function
  let count = 0
  prices.sort(function (a, b) { return a - b })
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < k) {
      count++
      k = k - prices[i]
    }
  }
  return count
}
