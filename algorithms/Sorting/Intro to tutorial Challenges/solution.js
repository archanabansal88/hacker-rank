function introTutorial (V, arr) {
  // Complete this function
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === V) {
      return i
      break
    }
  }
}
