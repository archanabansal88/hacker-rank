function toys (w) {
  // Complete this function
  let value = w.sort(function (a, b) { return a - b })[0]
  let container = 1
  for (var weight of w) {
    if (weight > value + 4) {
      value = weight
      container++
    }
  }
  return container
}
