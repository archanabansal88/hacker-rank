function anagram (s) {
  // Complete this function
  if (s.length % 2 !== 0) {
    return -1
  }
  let mid = s.length / 2
  let obj = {}
  let count = 0
  let isMatch = true
  for (let i = 0; i < mid; i++) {
    if (obj[s[i]] === undefined) {
      obj[s[i]] = 1
    } else {
      obj[s[i]]++
    }
  }

  for (let i = mid; i < s.length; i++) {
    if (obj[s[i]] !== undefined && obj[s[i]] > 0) {
      obj[s[i]]--
    } else {
      count++
      isMatch = false
    }
  }

  if (isMatch === true) {
    return 0
  } else {
    return count
  }
}
