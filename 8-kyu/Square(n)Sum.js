// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
// 1
// 2
// +
// 2
// 2
// +
// 2
// 2
// =
// 9
// 1 
// 2
//  +2 
// 2
//  +2 
// 2
//  =9.


const squareSum = (num) => {
    let sum = 0;

    const sqrArr = num.map(num => {
        return Math.pow(num, 2)
    })



    for (let i = 0; i < sqrArr.length; i++) {
        sum += sqrArr[i]
        // console.log(sum)
    }

    return sum
}

console.log(squareSum([1, 2]))
console.log(squareSum([0, 3, 4, 5]))
console.log(squareSum([0]))