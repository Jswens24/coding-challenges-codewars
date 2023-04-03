// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

const past = (h, m, s) => {
    const second = 1000
    const minute = 60000
    const hours = 3.6e+6
    let milliseconds = 0

    if (h > 0) {
        milliseconds += hours * h
    }

    if (m > 0) {
        milliseconds += minute * m
    }

    if (s > 0) {
        milliseconds += second * s
    }


    return milliseconds

}

console.log(past(0, 1, 1))
console.log(past(1, 1, 1))