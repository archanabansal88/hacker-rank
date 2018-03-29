function sumDigits (p) {
  var sum = 0
  while (p.length != 0) {
    var remainder = parseInt(p.substring(p.length - 1, p.length))
    sum = sum + remainder
    p = p.substring(0, p.length - 1)
  }
  return sum
}

function test (sum) {
  if (sum < 10) {
    return sum
  }

  var n = sumDigits(sum + '')
  return test(n)
}

function digitSum (n, k) {
  var sum = sumDigits(n + '') * k
  return test(sum + '')
}
