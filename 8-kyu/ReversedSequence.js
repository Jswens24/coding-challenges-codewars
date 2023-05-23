const reverseSeq = n => {
    const reverseArr = [];
    while (n > 0) {
        reverseArr.push(n);
        n--
    }
    return reverseArr

}

console.log(reverseSeq(5));