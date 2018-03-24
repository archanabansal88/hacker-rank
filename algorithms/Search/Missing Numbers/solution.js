function missingNumbers (arr, brr) {
  // Complete this function
  var obj = {}
  var newArr = []
  for (let i = 0; i < brr.length; i++) {
    	if (obj[brr[i]] === undefined) {
    		obj[brr[i]] = 1
    	} else {
    		obj[brr[i]]++
    	}
  }

  for (let i = 0; i < arr.length; i++) {
    		obj[arr[i]]--
  }

  for (var key in obj) {
    	if (obj[key] > 0) {
    		newArr.push(key)
    	}
  }
  return newArr
}
