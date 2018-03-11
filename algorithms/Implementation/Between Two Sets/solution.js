function getTotalX(a, b) {
    // Complete this function
    let x = Math.max(...a);
    let y = Math.min(...b);
    let count = 0;

    for (let i = x; i <= y; i++) {
        var isDivisible = true;
        for (let j = 0; j < a.length; j++) {
            if (i % a[j] !== 0) {
                isDivisible = false;
                break;
            }
        }
        if (isDivisible) {
            for (let j = 0; j < b.length; j++) {
                if (b[j] % i !== 0) {
                    isDivisible = false;
                    break;
                }
            }
        }
        if (isDivisible)
            count++;
    }
    return count;
}