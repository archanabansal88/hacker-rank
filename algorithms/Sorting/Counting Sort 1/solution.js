function countingSort (arr) {
  // Complete this function
  let obj = {}
  let newArr = []
  for (let i = 0; i <= 99; i++) {
    obj[i] = 0
  }

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] !== undefined) {
      obj[arr[i]]++
    }
  }
  for (var key in obj) {
    newArr.push(obj[key])
  }
  return newArr
}
