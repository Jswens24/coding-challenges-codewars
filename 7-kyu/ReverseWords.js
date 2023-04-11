// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

const reverseWords = (str) => {
    const strArr = str.split(' ')
    let reversedStr = []

    const mappedArr = strArr.map((word, i) => {

        reversedStr.push(word.split('').reverse().join(''))
    })
    return reversedStr.join(' ')

}

console.log(reverseWords('apple bottom jeans'))