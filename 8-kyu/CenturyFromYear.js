// he first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

const century = (year) => {
    let decimalYear = (year / 100).toFixed(2)

    return Math.ceil(decimalYear)


}

console.log(century('1705'))
