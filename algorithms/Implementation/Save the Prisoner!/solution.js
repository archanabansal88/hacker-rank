function saveThePrisoner(n, m, s) {
  // Complete this function
  let id = (s + (m - 1)) % n;
  return id === 0 ? n : id;
}
