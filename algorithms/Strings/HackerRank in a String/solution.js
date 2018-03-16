function hackerrankInString (s) {
  // Complete this function
  let str = 'hackerrank'
  let index = 0

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === str.charAt(index)) {
      index++
    }
    if (index === str.length - 1) {
      return 'YES'
    }
  }
  return 'NO'
}
