function camelcase (s) {
  // Complete this function
  let wordCount = 1
  for (var i = 0; i < s.length - 1; i++) {
    if (s[i + 1] === s[i + 1].toUpperCase()) {
      wordCount++
    }
  }
  return wordCount
}
