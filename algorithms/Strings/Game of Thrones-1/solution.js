function gameOfThrones (s) {
  // Complete this function
  let obj = {}
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === undefined) {
      obj[s[i]] = 1
    } else {
      obj[s[i]]++
    }
  }
  let oddCount = 0
  for (var key in obj) {
    if (obj[key] % 2 !== 0) {
      oddCount++
    }
  }

  if (s.length % 2 === 0 && oddCount == 0) {
    return 'YES'
  } else if (s.length % 2 !== 0 && oddCount == 1) {
    return 'YES'
  }

  return 'NO'
}
