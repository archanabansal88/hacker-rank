function solve(n, s, d, m) {
    // Complete this function
    let count = 0;
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        sum = 0;
        for (let j = i; j < i + m; j++) {
            sum += s[j];
        }
        if (sum === d) {
            count++;
        }
    }
    return count;
}