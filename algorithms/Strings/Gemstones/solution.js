function compare (str1, str2) {
  let obj = uniqueValue(str1)
  let ar = []
  for (let i = 0; i < str2.length; i++) {
    if (obj[str2[i]] && ar.indexOf(str2[i]) === -1) {
      ar.push(str2[i])
    }
  }
  return ar.join('')
}

function uniqueValue (str) {
  let obj = {}
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = 1
  }
  return obj
}

function gemstones (arr) {
  // Complete this function
  if (arr.length === 0) { return 0 }

  if (arr.length === 1) {
    var a = uniqueValue(arr[0])
    return Object.keys(a).length
  }
  let obj = {}
  let ar = []
  let common = arr[0]
  for (let i = 1; i < arr.length; i++) {
    common = compare(arr[i], common)
    if (common.length === 0) {
      return 0
    }
  }
  return common.length || 0
}
