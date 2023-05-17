/* Sort by Product
Difficulty - Medium

Concepts - Loops, Math


Your task is to sort an array of integer numbers by the 
product (multiplication) of the value and the index.
For sorting the index starts at 1, NOT at 0!
The sorting has to be ascending.
The array will never be null and will always contain numbers.

Example:

Input: 23, 2, 3, 4, 5

Product of value and index:
23 => 23 * 1 = 23 -> Output-Pos 4
2 => 2 * 2 = 4 -> Output-Pos 1
3 => 3 * 3 = 9 -> Output-Pos 2
4 => 4 * 4 = 16 -> Output-Pos 3
5 => 5 * 5 = 25 -> Output-Pos 5

Output: 2, 3, 4, 23, 5 */

const productSort = (array) => {
    let newArr = []
    array.forEach((el, i) => {
      let obj = {
        prod: el*(i+1),
        i: i
      }
      newArr.push(obj)
    })
    newArr.sort((a, b) => a.prod - b.prod)
    let sortedArr = []
    sortedArr.forEach(el => sortedArr.push(array[el.i]))
    return newArr
}

console.log(productSort([23, 2, 3, 4, 5]))