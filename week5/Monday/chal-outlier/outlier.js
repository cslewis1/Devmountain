/* Medium

Concepts
Math, Logic, Conditionals

You are given an array (which will have a length of at least 3, 
    but could be very large) containing integers. The array is either entirely 
    comprised of odd integers or entirely comprised of even integers except for 
    a single integer N. Write a function that takes the array as an argument and 
    returns this “outlier” N.

Examples:
[2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)
[160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number) */

const findOutlier = (arr) => {
    let even = arr.filter(el => el % 2 === 0)
    let odd = arr.filter(el => el % 2 === 1)

    if (even.length === 1) {
        return even
    } else {
        return odd
    } 
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))