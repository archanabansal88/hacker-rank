function repeatedString(s, n) {
  // Complete this function
  let length = s.length;
  let aCount = s.split("").reduce((count, value) => {
    if (value === "a") {
      count++;
    }
    return count;
  }, 0);

  let num = parseInt(n / length);
  aCount = aCount * num;
  if (n % length > 0) {
    for (let i = 0; i < n % length; i++) {
      if (s[i] === "a") {
        aCount++;
      }
    }
  }
  return aCount;
}
