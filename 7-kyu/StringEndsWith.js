// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc')  returns true
// solution('abc', 'd')  returns false


const solution = (str, ending) => {
    const endingLength = ending.length;
    const strArr = str.split('');
    const sliceStrArr = strArr.slice(-endingLength);
    const compareStr = sliceStrArr.join('')

    if (endingLength === 0) {
        return true
    }
    else if (compareStr == ending) {
        return true
    } else {
        return false
    }


    // console.log(endingLength-1)
    console.log(compareStr)

    // console.log({strLength}, {endingLength})

}


// console.log(solution('samurai', 'ai'))
// console.log(solution('abcde', 'abc'))
// console.log(solution('abc', 'd'))
// console.log(solution('abc', 'bc'))
console.log(solution('abc', ''))