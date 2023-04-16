// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string


function fakeBin(x) {
    const binaryArr = []
    x.split('').map(num => {
        if (num < 5) {
            binaryArr.push(0)
        } else {
            binaryArr.push(1)
        }
    })
    return binaryArr.join('')
}

console.log(fakeBin('45385593107843568'))