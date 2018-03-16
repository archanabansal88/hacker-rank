
function minimumNumber (n, password) {
  // Return the minimum number of characters to make the password strong
  let count = 0
  if (!/[0-9]+/.test(password)) {
    count++
  }
  if (!/[A-Z]+/.test(password)) {
    count++
  }
  if (!/[a-z]+/.test(password)) {
    count++
  }
  if (!/[!@#$%^&*()\-+]+/.test(password)) {
    count++
  }

  if (n < 6 && count < (6 - n)) {
    return 6 - n
  }
  return count
}
