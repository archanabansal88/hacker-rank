function findDigits(n) {
  // Complete this function
  let str = (n + "").split("");
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (n % (str[i] * 1) === 0) {
      count++;
    }
  }
  return count;
}
