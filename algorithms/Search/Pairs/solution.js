function pairs (k, arr) {
  // Complete this function
  arr.sort((a, b) => { return a - b })
  let count = 0

  var guess

  for (let i = 0; i < arr.length; i++) {
    var min = i + 1
    var max = arr.length - 1

    while (max >= min) {
      guess = parseInt((max + min) / 2)

      if (arr[i] + k === arr[guess]) {
        count++
        break
      } else if (arr[i] + k > arr[guess]) {
        min = guess + 1
      } else {
        max = guess - 1
      }
    }
  }
  return count
}
