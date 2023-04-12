// Write your code below
/* Given a word, return true if that word contains only unique characters. 
Return false otherwise.

For example:

hasUniqueChars("Monday")
// returns true
hasUniqueChars("Moonday")
// returns false
Uppercase and lowercase letters should be considered separately:

hasUniqueChars("Bob")
// returns true */

function hasUniqueChars(str) {
  let isUnique = true;
  let uniqueArray = str.split("");
  for (let i = 0; i < uniqueArray.length; i++) {
    for (let j = i + 1; j < uniqueArray.length; j++) {
      if (uniqueArray[i] === uniqueArray[j]) {
        isUnique = false;
      }
    }
  }
  return isUnique;
}

console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));
console.log(hasUniqueChars("Bob"));
