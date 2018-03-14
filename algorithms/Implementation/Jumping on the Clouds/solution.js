function jumpingOnClouds(c) {
  // Complete this function
  let count = 0;
  let i = 0;
  while (i < c.length - 1) {
    if (i + 2 < c.length && c[i + 2] === 0) {
      i = i + 2;
    } else {
      i = i + 1;
    }
    count++;
  }
  return count;
}
