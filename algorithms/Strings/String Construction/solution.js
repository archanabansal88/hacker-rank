function stringConstruction (s) {
  // Complete this function
  let obj = {}
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = 1
  }
  return Object.keys(obj).length
}
