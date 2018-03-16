function reverseString (str) {
  var i = str.length - 1
  var revStr = ''
  while (i >= 0) {
    revStr += str[i]
    i--
  }
  return revStr
}
function funnyString (s) {
  // Complete this function
  let rev = reverseString(s)
  for (let i = 0; i < s.length - 1; i++) {
    if (Math.abs(s[i].charCodeAt() - s[i + 1].charCodeAt()) !== Math.abs(rev[i].charCodeAt() - rev[i + 1].charCodeAt())) {
      return 'Not Funny'
    }
  }
  return 'Funny'
}
