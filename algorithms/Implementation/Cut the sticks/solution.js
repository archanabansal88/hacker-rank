function cutTheSticks(arr) {
  // Complete this function
  let remove;
  let a = [];
  arr.sort((a, b) => a - b).reverse();
  while (arr.length > 0) {
    a.push(arr.length);
    remove = arr.pop();
    while (arr.length > 0 && arr[arr.length - 1] <= remove) {
      arr.pop();
    }
  }
  return a;
}
