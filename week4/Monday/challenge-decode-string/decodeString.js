/* Decode String
Difficulty - Medium
Concepts - Loops

In this challenge, you’ll write a decoder.
Write a function that takes in a string and returns a string. 
A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm
The number in the string represents how many characters each 
letter should shift. For example:

>>> "1a" // "b"
>>> "3ce" // "fh"
>>> "2fcjjm" // "hello" */

// Write your code below this line

const decodeStr = (str) => {
    let num = +(str[0])
    let decode = []
    
    for (let i = 1; i < str.length; i++) {
        let alphabet = str[i].charCodeAt() + num
        decode.push(String.fromCharCode(alphabet))
    }
    return decode.join('')
}

console.log(decodeStr2("1a"));
console.log(decodeStr2("3ce"));
console.log(decodeStr("2fcjjm"));
