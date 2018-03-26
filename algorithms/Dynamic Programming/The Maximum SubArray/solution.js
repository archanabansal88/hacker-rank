function maxSubarray (arr) {
  // Complete this function
  var sum = 0,
	    maxSum = arr[0],
    subSum = 0
  if (arr.length === 1) {
    return [arr[0], arr[0]]
  }
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
    if (sum < arr[i]) {
      sum = arr[i]
    }
    if (maxSum < sum) {
      maxSum = sum
    }
  }
  arr = arr.sort((a, b) => a - b)
  if (arr[arr.length - 1] <= 0) {
    subSum = arr[arr.length - 1]
  } else {
    subSum = arr.reduce((sum, value) => {
      if (value > 0) {
        sum += value
      }
      return sum
    }, 0)
  }

  return [maxSum, subSum]
}
