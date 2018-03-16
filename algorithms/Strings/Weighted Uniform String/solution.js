function calculateWeight (str) {
  var values = {}, prev, mul
  for (var i = 0; i < str.length; i++) {
	    var last_w = str[i].charCodeAt() - 96
	    if (str[i] === prev) {
	    	mul++
	    	last_w *= mul
	    } else {
	    	mul = 1
	    }
	    prev = str[i]
	    values[last_w] = 1
  }
  return values
}
