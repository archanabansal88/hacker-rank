function marsExploration (s) {
  // Complete this function
  let count = 0
  let str = 'SOS'
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) !== str.charAt(i % 3)) {
      count++
    }
  }
  return count
}
