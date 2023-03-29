// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

const solution = (str) => {
    const coupleArr = []

    str.length % 2 != 0 ? str += '_' : null

    const strArr = str.split('')

    for (let i = 0; i < strArr.length; i += 2) {
        coupleArr.push(strArr[i] + strArr[i + 1])
    }


    return coupleArr

}

console.log(solution('abcdef'))
console.log(solution('abcdefd'))