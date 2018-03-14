function beautifulTriplets(d, arr) {
  // Complete this function
  let count = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[j] - arr[i] > d) break;
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[k] - arr[j] > d) break;
        if (arr[k] - arr[j] == d && arr[j] - arr[i] == d) {
          count++;
        }
      }
    }
  }
  return count;
}
