// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// function XO(str) {
//     code here
// }

const XO = (str) => {
    const lowerStr = str.toLowerCase()
    const strArr = lowerStr.split('');
    const xArr = strArr.filter(letter => letter === 'x')
    const oArr = strArr.filter(letter => letter === 'o')


    if (xArr.length === oArr.length) {
        return true
    } else {
        return false
    }

}