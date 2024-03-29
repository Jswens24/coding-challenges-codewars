
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

const maskify = (cc) => {
    const strLength = cc.length - 1;
    const strArr = cc.split('');

    const strMap = strArr.map((num, index) => {
        if (index <= strLength && index >= strLength - 3) {
            return num
        } else {
            return '#'
        }
    });

    return strMap.join('');

}

console.log(maskify('4556364607935616'))
console.log(maskify('1'))
console.log(maskify('11111'))
