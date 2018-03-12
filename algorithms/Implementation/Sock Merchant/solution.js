function sockMerchant(n, ar) {
  // Complete this function
  let pairCount = 0;
  let obj = {};

  for (let i = 0; i < n; i++) {
    if (obj[ar[i]] === undefined) {
      obj[ar[i]] = 1;
    } else {
      obj[ar[i]]++;
    }
    if (obj[ar[i]] === 2) {
      pairCount++;
      delete obj[ar[i]];
    }
  }
  return pairCount;
}
