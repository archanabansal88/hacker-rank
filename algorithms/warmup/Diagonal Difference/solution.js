function diagonalDifference(a) {
    // Complete this function
    var primarySum = 0;
    var secondarySum = 0;
    var diff;
    for(var i=0,j=0; i<a.length; i++,j++){
    	primarySum += a[i][j];
    }
    for(var i=0,j=a.length-1; i<a.length; i++,j--){
    	secondarySum += a[i][j];
    }
    diff = Math.abs(primarySum-secondarySum);
    return diff;
}
