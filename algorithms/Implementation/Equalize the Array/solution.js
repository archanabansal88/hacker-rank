function equalizeArray(arr) {
  // Complete this function
  let obj = {},
    max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
    }
  }
  return arr.length - max;
}
