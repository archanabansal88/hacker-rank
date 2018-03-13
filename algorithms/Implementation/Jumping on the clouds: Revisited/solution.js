function jumpingOnClouds(c, k) {
  // Complete this function
  let energy = 100;
  for (let i = 0; i < c.length; i = i + k) {
    if (c[i] === 0) {
      energy = energy - 1;
    } else {
      energy = energy - 1 - 2;
    }
  }
  return energy;
}
