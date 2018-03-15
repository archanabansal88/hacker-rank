function fairRations (B) {
  var count = 0
  for (let i = 0; i < B.length; i++) {
    if (i === B.length - 1)// We have reached the last person
    {
      if (B[i] % 2 === 1) // If last person ended with odd bread it is not possible
      {
        return 'NO'
      } else {
        return count
      }
    }

    if (B[i] % 2 !== 0) {
      B[i] = parseInt(B[i]) + 1
      B[i + 1] = parseInt(B[i + 1]) + 1
      count += 2
    }
  }
}
