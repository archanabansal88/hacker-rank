function designerPdfViewer(h, word) {
    // Complete this function
    let tallest = 0;
    for (let i = 0; i < word.length; i++) {
        index = (word[i].charCodeAt() - 97);
        tallest = Math.max(tallest, h[index]);
    }

    return tallest * word.length;
}