// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !


const pigIt = (str) => {
    const strArr = str.split(' ');

    const mapArr = strArr.map((word, index) => {
        if (word === '.' || word === ',' || word === ':' || word === ';' || word === '?' || word === '!') {
            return word
        } else {
            let wordArr = word.split('')
            let firstLetter = wordArr.shift()
            wordArr.push(firstLetter)
            return wordArr.join('') + 'ay'
        }
    })

    return mapArr.join(' ')
}

console.log(pigIt('Pig latin is cool'))
console.log(pigIt('Hello world !'))