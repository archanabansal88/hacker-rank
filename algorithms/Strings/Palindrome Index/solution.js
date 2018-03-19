function reverseString (str) {
  var i = str.length - 1
  var revStr = ''
  while (i >= 0) {
    revStr += str[i]
    i--
  }
  return revStr
}

function palindromeIndex (s) {
  // Complete this function
  let str1 = s
  let str = reverseString(s)

  if (s !== str) {
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== str[i]) {
        let temp_str = s.substring(i + 1, s.length - i)
        if (temp_str == reverseString(temp_str)) {
          return i
        }
        return s.length - i - 1
      }
    }
  }
  return -1
}
