/*
  Write a function called greaterThan10 that takes in an object. 
  Write a for in loop that loops over the object and changes any value that is greater than 10 to 0. 
  Return the updated object.
*/

const obj1 = { one: 1, two: 2, three: 11, four: 44, five: 5 }

const greaterThan10 = (obj) => {
    for (num in obj) {
        if (obj[num] > 10) {
            obj[num] = 0
        }
    }

    return obj
}

console.log(greaterThan10(obj1));

