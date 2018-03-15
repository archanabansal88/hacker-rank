
function flatlandSpaceStations (n, c) {
  c.sort((a, b) => a - b)
  let max = 0
  for (let i = 0; i < c.length - 1; i++) {
    const citiesInside = c[i + 1] - c[i] - 1
    const d = parseInt(Math.ceil(citiesInside / 2.0))
    if (d > max) {
      max = d
    }
  }
  if (c[0] - 0 > max) {
    max = c[0] - 0
  }
  if (n - 1 - c[c.length - 1] > max) {
    max = n - 1 - c[c.length - 1]
  }

  return max
}
