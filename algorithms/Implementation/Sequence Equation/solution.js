function permutationEquation(p) {
  // Complete this function
  let obj = {};
  let arr = [];
  let x, y;
  for (let i = 0, j = 1; i < p.length; i++, j++) {
    obj[p[i]] = j;
  }
  for (let i = 1; i <= p.length; i++) {
    x = obj[i];
    y = obj[x];
    arr.push(y);
  }
  return arr;
}
