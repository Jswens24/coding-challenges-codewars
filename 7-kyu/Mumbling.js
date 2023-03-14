// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


const accum = (str) => {
    const lowerStr = str.toLowerCase()
    const strArr = lowerStr.split('');
    const newArr = [];
    const capitalArr = [];

    for (let i = 0; i < strArr.length; i++) {
        newArr.push(strArr[i].repeat(i + 1))
    }


    for (let j = 0; j < newArr.length; j++) {
        capitalArr.push(newArr[j].replace(newArr[j][0], newArr[j][0].toUpperCase()))

    }

    return capitalArr.join('-')

}

console.log(accum('abcd'))
console.log(accum('ZpglnRxqenU'))