function serviceLane(n, width, cases) {
  // Complete this function

  let arr = [];
  for (let i = 0; i < cases.length; i++) {
    let min = 9999999999999999999;
    for (let j = cases[i][0]; j <= cases[i][1]; j++) {
      min = Math.min(width[j], min);
    }
    arr.push(min);
  }
  return arr;
}
