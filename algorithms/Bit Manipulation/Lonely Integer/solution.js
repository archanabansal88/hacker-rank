function lonelyinteger (a) {
  // Complete this function
  let sum = 0
  for (let i = 0; i < a.length; i++) {
    sum ^= a[i]
  }
  return sum
}
