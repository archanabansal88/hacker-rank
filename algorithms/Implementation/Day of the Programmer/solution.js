function solve(year) {
    // Complete this function
    var sum = 31 + 31 + 31 + 31 + 31 + 30 + 30;

    if (year === 1918) {
        return '26.09.1918';
    }
    if ((year < 1918 && year % 4 == 0) || year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        sum += 29;
    } else {
        sum += 28;
    }
    var diff = 256 - sum;

    return diff + '.' + '09' + '.' + year;

}
