function workbook (n, k, arr) {
  // Complete this function
  let specialPrblm = 0
  let page = 1
  for (let i = 0; i < n; i++) {
    const problems = arr[i]
    for (let j = 1; j <= problems; j++) {
      if (j === page) {
        specialPrblm++
      }
      if (j !== problems && j % k === 0) {
        page++
      }
    }
    page++
  }
  return specialPrblm
}
