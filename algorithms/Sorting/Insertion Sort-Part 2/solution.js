function insertionSort2 (n, arr) {
  // Complete this function
  var i, value, positionToInsert

  for (i = 1; i < arr.length; i++) {
    value = arr[i]
    positionToInsert = i

    while (positionToInsert > 0 && value < arr[positionToInsert - 1]) {
      arr[positionToInsert] = arr[positionToInsert - 1]
      positionToInsert--
    }

    arr[positionToInsert] = value
    console.log(arr.join(' '))
  }
}
