function compare (arr) {
  var temp = []
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 1; j < arr[i].length - 1; j++) {
      if (arr[i][j] > arr[i - 1][j] && arr[i][j] > arr[i + 1][j] && arr[i][j] > arr[i][j - 1] && arr[i][j] > arr[i][j + 1]) {
        arr[i][j] = 'X'
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i].join(''))
  }
  return temp
}

function cavityMap (grid) {
  // Complete this function
  let arr = []
  for (let i = 0; i < grid.length; i++) {
    arr.push(grid[i].split(''))
  }
  return compare(arr)
}
