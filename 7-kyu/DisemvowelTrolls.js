// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


const disemvowel = (str) => {
    let newStr = str.replaceAll("a", "")
    newStr = newStr.replaceAll("e", "")
    newStr = newStr.replaceAll("i", "")
    newStr = newStr.replaceAll("o", "")
    newStr = newStr.replaceAll("u", "")
    newStr = newStr.replaceAll("A", "")
    newStr = newStr.replaceAll("E", "")
    newStr = newStr.replaceAll("I", "")
    newStr = newStr.replaceAll("O", "")
    newStr = newStr.replaceAll("U", "")

    return newStr
}

console.log(disemvowel('This website is for losers LOL!'))