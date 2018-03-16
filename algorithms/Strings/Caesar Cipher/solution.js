function caesarCipher (s, k) {
  // Complete this function
  let newStr = ''
  for (let i = 0; i < s.length; i++) {
    x = s[i].charCodeAt()
    if (x > 64 && x < 91) {
      x = x - 65
      x = x + k
      x = (x % 26) + 65
    } else if (x > 96 && x < 123) {
      x = x - 97
      x = x + k
      x = (x % 26) + 97
    } else {
      x = x
    }
    newStr += String.fromCharCode(x)
  }
  return newStr
}
