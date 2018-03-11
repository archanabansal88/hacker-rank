function catAndMouse(x, y, z) {
    /*
     * Write your code here.
     */

    if (Math.abs(x - z) > Math.abs(y - z)) {
        return 'Cat B';
    } else if (Math.abs(y - z) > Math.abs(x - z)) {
        return 'Cat A';
    } else {
        return 'Mouse C';
    }

}