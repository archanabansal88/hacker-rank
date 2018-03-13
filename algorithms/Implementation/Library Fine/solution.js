function libraryFine(d1, m1, y1, d2, m2, y2) {
  // Complete this function
  if (y2 < y1) {
    return 10000;
  } else if (y1 === y2 && m2 < m1) {
    return 500 * (m1 - m2);
  } else if (m1 === m2 && y1 === y2 && d2 < d1) {
    return 15 * (d1 - d2);
  } else {
    return 0;
  }
}
