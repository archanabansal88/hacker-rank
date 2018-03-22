function findMedian (arr) {
  // Complete this function
  arr.sort(function (a, b) {
    return a - b
  })
  let mid = parseInt(arr.length / 2)
  return parseInt((arr[mid] + arr[mid + 1]) / 2)
}
