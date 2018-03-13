function circularArrayRotation(k, a, m) {
  // Complete this function
  k = k % a.length;
  let arr = [];
  let temp;
  for (let i = a.length - k; i < a.length; i++) {
    arr.push(a[i]);
  }

  for (let i = 0; i < a.length - k; i++) {
    arr.push(a[i]);
  }

  return m.map(index => {
    return arr[index];
  });
}
