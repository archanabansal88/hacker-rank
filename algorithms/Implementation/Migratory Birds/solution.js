function migratoryBirds(n, ar) {
  // Complete this function
  let obj = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  let max = 0;
  let maxCount = 0;
  for (let i = 0; i < ar.length; i++) {
    obj[ar[i]]++;
  }
  for (var key in obj) {
    if (maxCount < obj[key]) {
      max = key;
      maxCount = obj[key];
    }
  }
  return max;
}
