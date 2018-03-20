function minimumAbsoluteDifference (n, arr) {
  // Complete this function
  arr.sort((a, b) => a - b)
  let val
  let diff = Math.max(...arr)
  for (let num of arr) {
    if (val !== undefined) {
      diff = Math.min(diff, Math.abs(val - num))
    }
    val = num
  }
  return diff
}
