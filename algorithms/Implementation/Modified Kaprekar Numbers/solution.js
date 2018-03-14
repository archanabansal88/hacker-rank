function kaprekarNumbers(p, q) {
  // Complete this function
  let arr = [],
    arr1 = [],
    str,
    num,
    half;
  for (let i = p; i <= q; i++) {
    arr.push(i * i);
  }

  for (let i = 0; i < arr.length; i++) {
    str = arr[i].toString();

    if (str.length > 1) {
      half = str.length / 2;
      num = Number(str.slice(0, half)) + Number(str.slice(half, str.length));
      if (num === arr[i] / num) {
        arr1.push(num);
      }
    }
    if (arr[i] === 1) {
      arr1.push(arr[i]);
    }
  }
  if (arr1.length === 0) {
    return ["INVALID RANGE"];
  }
  return arr1;
}
