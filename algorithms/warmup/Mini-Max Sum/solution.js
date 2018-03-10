function miniMaxSum(arr) {
    // Complete this function
    var sum = 0,
		maxSum = 0,
		minSum = 0;

	for (var i = 0; i < arr.length; i++) {
		sum = 0;
		for (var j = 0; j < arr.length; j++) {
			if (j !== i) {
				sum += arr[j];
			}
		}
		if (maxSum < sum) {
			maxSum = sum;
		}
		if (minSum === 0) {
			minSum = sum;
		}else if(sum < minSum){
			minSum = sum;
		}
	}
	console.log(minSum + ' ' + maxSum);
}
