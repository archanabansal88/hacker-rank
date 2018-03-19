function makingAnagrams (s1, s2) {
  // Complete this function
  let obj = {}
  let obj2 = {}
  let count = 0
  for (let i = 0; i < s1.length; i++) {
    if (obj[s1[i]] === undefined) {
      obj[s1[i]] = 1
    } else {
      obj[s1[i]]++
    }
  }

  for (let i = 0; i < s2.length; i++) {
    if (obj[s2[i]] !== undefined) {
      obj[s2[i]]--
      if (obj[s2[i]] === 0) {
        delete obj[s2[i]]
      }
    } else {
      if (obj2[s2[i]] === undefined) {
        obj2[s2[i]] = 1
      } else {
        obj2[s2[i]]++
      }
    }
  }
  for (var key in obj) {
    count += obj[key]
  }

  for (var key in obj2) {
    count += obj2[key]
  }

  return count
}
