function staircase(n) {
    // Complete this function
    var str = '';
	var space = '';
	var newStr;
	for (var i = 1; i <= n; i++) {
		space = '';
		str += '#';
		for (var j = n - i; j > 0; j--) {
			space += ' ';
		}
		newStr = space + str;
		console.log(newStr);
	}
}