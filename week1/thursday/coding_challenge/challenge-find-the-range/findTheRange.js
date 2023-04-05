// Given an array of numbers, write some code to loop through the array, and print out the smallest and largest numbers in the array.
// For example, if given the array [1, 4, 11, 2, 37, -4], your code should print out -4, 37.

// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:
let max = 0
let min = 0
for (let i = 0; i < array.length; i++) {
    if (min > array[i]) {
        min = array[i]
    }
    if (max < array[i]) {
        max = array[i]
    }
}
console.log(`${min}, ${max}`)   

