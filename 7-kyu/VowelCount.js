// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//     return 0;
//   }

const getCount = (str) => {
    const strArr = str.split('');
    let count = 0;
    const vowelArr = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < strArr.length; i++) {
        for (let j = 0; j < vowelArr.length; j++) {
            if (strArr[i] === vowelArr[j]) {
                count++
            }
        }
    }
    return count
}