function plusMinus(arr) {
    // Complete this function
    	var positiveCount = 0,
		negativeCount = 0,
		zeroCount = 0,
		size = arr.length,
		positiveFraction,
		negativeFraction,
		zeroFraction;

	for (var i = 0; i < size; i++) {
		if (arr[i] > 0) {
			positiveCount++;
		} else if (arr[i] < 0) {
			negativeCount++;
		} else if (arr[i] === 0) {
			zeroCount++;
		}
	}

	positiveFraction = positiveCount / size;
	console.log(positiveFraction.toPrecision(6));

	negativeFraction = negativeCount / size;
	console.log(negativeFraction.toPrecision(6));

	zeroFraction = zeroCount / size;
	console.log(zeroFraction.toPrecision(6));
}