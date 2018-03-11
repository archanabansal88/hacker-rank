function breakingRecords(score) {
    // Complete this function
    let max = score[0],
        min = score[0];

    return score.reduce((arr, currentElement) => {
        if (max < currentElement) {
            max = currentElement;
            arr[0]++;
        }
        if (min > currentElement) {
            min = currentElement;
            arr[1]++;
        }

        return arr;

    }, [0, 0]);

}