export const reverseSeq = (n: number): number[] => {
    const reverseArr: number[] = [];
    while (n > 0) {
        reverseArr.push(n)
        n--
    }
    return reverseArr;
};