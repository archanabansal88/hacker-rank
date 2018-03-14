function chocolateFeast(n, c, m) {
  // Complete this function
  let wrapper = parseInt(n / c);
  let count = wrapper;

  while (wrapper >= m) {
    free = parseInt(wrapper / m);
    count += free;
    wrapper = wrapper - free * m + free;
  }
  return count;
}
