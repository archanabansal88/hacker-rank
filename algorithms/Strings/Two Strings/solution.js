function twoStrings (s1, s2) {
  // Complete this function
  let obj = {}
  let isMatch = false
  for (let i = 0; i < s1.length; i++) {
    obj[s1[i]] = 1
  }

  for (let i = 0; i < s2.length; i++) {
    if (obj[s2[i]] !== undefined) {
      isMatch = true
    }
  }
  if (isMatch === true) {
    return 'YES'
  } else {
    return 'NO'
  }
}
