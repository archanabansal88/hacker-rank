function super_reduced_string (s) {
  // Complete this function
  let i = 0
  let length = s.length
  while (i < length - 1) {
    	var current = s.charAt(i)
    	var next = s.charAt(i + 1)

    	if (current === next) {
    		s = s.substring(0, i) + s.substring(i + 2)
    		length = s.length
    		i--
    	} else {
    		i++
    	}
  }

  if (s.length === 0) {
    	return 'Empty String'
  }
  return s
}
