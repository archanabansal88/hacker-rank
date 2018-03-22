function insertionSort1 (n, arr) {
  // Complete this function
  let i, positionToInsert
  let value = arr[arr.length - 1]

  for (i = arr.length - 1; i >= 0; i--) {
    positionToInsert = i

    if (value < arr[i - 1]) {
      arr[positionToInsert] = arr[positionToInsert - 1]
    } else {
      arr[positionToInsert] = value
      console.log(arr.join(' '))
      break
    }
    console.log(arr.join(' '))
  }
}
