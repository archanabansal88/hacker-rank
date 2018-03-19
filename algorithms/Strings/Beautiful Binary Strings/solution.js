function beautifulBinaryString (b) {
  // Complete this function
  let str = '010'
  let count = 0
  b = b.replace(/str/g, 'a')
  for (let i = 0; i < b.length; i++) {
    if (b[i] === 'a') {
      count++
    }
  }
  return count
}
