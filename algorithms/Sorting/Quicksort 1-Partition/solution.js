function quickSort (arr) {
  // Complete this function
  let pivot = arr[0]
  let left = []
  let right = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i])
    } else if (arr[i] < pivot) {
      left.push(arr[i])
    }
  }
  left.push(pivot)
  return left.concat(right)
}
