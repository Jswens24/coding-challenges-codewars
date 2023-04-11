// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

const findAverage = (arr) => {
    let sum = 0
    if (arr.length > 0) {
        sum = arr.reduce((accumulator, currentValue) =>
            accumulator + currentValue
        )
        return sum / arr.length
    } else {
        return sum
    }
}

console.log(findAverage([1, 2, 3]))
console.log(findAverage([]))