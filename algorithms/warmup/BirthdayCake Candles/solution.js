function birthdayCakeCandles(n, ar) {
    // Complete this function
   var obj = {};
	var maxCount=1;
	var count;
	for (var i = 0; i < ar.length; i++) {
		if (obj[ar[i]] === undefined) {
			obj[ar[i]] = 1;
		} else {
			obj[ar[i]]++;
		}
	}
	for (var key in obj) {
		if (obj[key] > 1) {
			count = obj[key];
		}
		if (count > maxCount) {
			maxCount = count;
		}
	}
	return maxCount;
}