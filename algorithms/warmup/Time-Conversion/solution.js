function timeConversion(s) {
    // Complete this function
    var time;
    var arr;
    if(s.includes('AM')){
    	 s = s.replace('AM','');
    	 arr = s.split(':');
    	if(arr[0] === "12"){
    		arr[0] = '00';
    	}
    	time = arr.join(':');
    }

    if(s.includes('PM')){
    	 s = s.replace('PM','');
    	 arr = s.split(':');
    	 if(arr[0] < '12'){
    	 		arr[0] = (arr[0]*1)+12;
    	 }
    	 time = arr.join(':');
    }
    return time;
}