function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Complete this function
    const count = apples.reduce(function (previous, apple) {
        if (apple + a >= s && apple + a <= t) {
            previous++;
        }
        return previous;
    }, 0);

    const count1 = oranges.reduce(function (previous, orange) {
        if (orange + b >= s && orange + b <= t) {
            previous++;
        }
        return previous;
    }, 0);
    console.log(count);
    console.log(count1);
}