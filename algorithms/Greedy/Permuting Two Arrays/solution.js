function twoArrays (k, A, B) {
  // Complete this function
  A.sort((a, b) => a - b)
  B.sort((a, b) => b - a)
  for (let i = 0; i < A.length; i++) {
    if (A[i] + B[i] < k) {
      return 'NO'
    }
  }
  return 'YES'
}
