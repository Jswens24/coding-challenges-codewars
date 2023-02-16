// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// function numberToString(num) {
//     Return a string of the number here!
//   }


const numberToString = (num) => {
    return num.toString()
}




console.log(numberToString(123))
console.log(numberToString(99))
console.log(numberToString(-100))
console.log(numberToString(-7))
console.log(numberToString(0))