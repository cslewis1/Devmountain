// Write your code below this line.

/* Given a number, n, return an array containing n unique random numbers 
between 1-10, inclusive. 
(That is, do not repeat any numbers in the returned list.)

You can trust that this function will never be called with n < 0 or n > 10.

For example:

luckyNumbers(2)
// returns (3, 7)
luckyNumbers(6)
// returns (1, 7, 9, 6, 5, 2) */

let array = [1,2,3,4,5,6,7,8,9,10]
let randomNumbersArr = []

let luckyNumbers = num => {
    for (let i = 0; i < array.length; i++) {  
        let randomNumber = Math.floor(Math.random() * array.length)  
        if (!randomNumbersArr.includes(randomNumber)){
            randomNumbersArr.push(randomNumber)
        }        
    }
    return randomNumbersArr.splice(0, num)
}
console.log(luckyNumbers(6))


