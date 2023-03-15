// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.


const findSmallestInt = (nums) => {
    let smallest = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= smallest) {
            smallest = nums[i]
        }
    }
    return smallest

}

console.log(findSmallestInt([78, 56, 232, 12, 8]))
console.log(findSmallestInt([34, -345, -1, 100]))
