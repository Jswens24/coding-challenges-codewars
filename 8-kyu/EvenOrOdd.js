// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// function evenOrOdd(number) {

// }

const evenOrOdd = (num) => {
    if (num % 2 == 0) {
        return 'even'
    } else {
        return 'odd'
    }
}

console.log(evenOrOdd(2))
console.log(evenOrOdd(7))
console.log(evenOrOdd(-42))
console.log(evenOrOdd(-7))
console.log(evenOrOdd(0))