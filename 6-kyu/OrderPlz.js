// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""



const order = (words) => {
    const wordsArr = words.split(' ');
    const orderedArr = []
    let index = 0


    for (let i = 0; i < wordsArr.length; i++) {
        index = wordsArr[i].match(/\d/g)
        orderedArr[index - 1] = wordsArr[i]
    }
    // console.log(orderedArr)

    return orderedArr.filter(word => word.length > 0).join(' ')
    // console.log(orderedArr[1])

}

// console.log(order("is2 Thi1s T4est 3a"))
console.log(order('1 3 4 2 6 4 3 7'))
  // console.log(order("4of Fo1r pe6ople g3ood th5e the2"))