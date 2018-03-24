function solve (a) {
  // Complete this function
  let left_i = 0,
    		right_i = a.length - 1,
     		left_sum = a[left_i],
    		right_sum = a[right_i]

  while (left_i != right_i) {
    	if (left_sum < right_sum) {
      left_i += 1
      left_sum += a[left_i]
    } else {
      right_i -= 1
    	      right_sum += a[right_i]
    	  }
  }

  if (left_sum == right_sum) {
    	return 'YES'
  }
  return 'NO'
}
