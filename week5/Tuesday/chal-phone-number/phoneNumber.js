/* Create a Phone Number
Difficulty - Medium

Concepts - General, Loops
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don’t forget the space after the closing parentheses! */

let createPhoneNumber = (arr) => {
    let num1 = arr.splice(0, 3).join("")
    let num2 = arr.splice(0, 3).join("")
    let num3 = arr.splice(0, 4).join("")

    console.log(`(${num1}) ${num2}-${num3}`)
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])