function getMoneySpent(keyboards, drives, s) {
  // Complete this function
  let sum = 0,
    maxSum = 0,
    no;

  for (var i = 0; i < keyboards.length; i++) {
    for (var j = 0; j < drives.length; j++) {
      sum = keyboards[i] + drives[j];
      if (sum <= s) {
        if (sum > maxSum) {
          maxSum = sum;
        }
      } else {
        no = -1;
      }
    }
  }
  if (maxSum) {
    return maxSum;
  } else {
    return no;
  }
}
