function countingValleys(n, s) {
    // Complete this function
    let current = 0;
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (s[i] === 'U') {
            current++;
        } else {
            current--;
        }
        if (current === 0 && s[i] === 'U') {
            count++;
        }
    }
    return count;
}