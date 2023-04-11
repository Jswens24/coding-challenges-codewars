// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

const grow = (arr) => {
    let sum = 0

    sum = arr.reduce((accumulator, currentValue) =>
        accumulator * currentValue
    )
    return sum
}

console.log(grow([1, 2, 3]))