function solve(a0, a1, a2, b0, b1, b2){
    // Complete this function
  var arr = [0,0];
	if (a0 > b0) {
		arr[0]++;
	}else if(b0>a0){
		arr[1]++;
	}
	 if(a1 > b1){
       arr[0]++;
    }else if(b1>a1){
    	arr[1]++;
    }
	if (a2 >b2) {
		arr[0]++;
	}else if(b2>a2){
		arr[1]++;
	}
	if (a1 === b1 || a0 === b0 || a2===b2) {
		arr = arr;
	} 
   
	return arr;
}