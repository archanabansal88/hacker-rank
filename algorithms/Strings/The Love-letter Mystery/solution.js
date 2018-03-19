function theLoveLetterMystery (s) {
  // Complete this function
  let count = 0

  for (let i = 0, j = s.length - 1; i < s.length / 2; i++, j--) {
    count += Math.abs(s[j].charCodeAt() - s[i].charCodeAt())
  }
  return count
}
