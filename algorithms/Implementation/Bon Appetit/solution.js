function bonAppetit(n, k, arr) {
    // Complete this function
    let sum = 0;
    let diff = 0;
    let split = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i !== n) {
            sum += arr[i];
        }
    }
    split = sum / 2;
    diff = k - split;

    if (diff === 0) {
        return 'Bon Appetit';
    }
    return diff;

}
