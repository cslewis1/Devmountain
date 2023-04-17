/* Instructions
Write a function called hasMoreVowels that takes in one argument, word. 
When the function is called, return true if that word contains more vowels 
than non-vowels; otherwise, return false. The word will always be a single word, 
without any punctuation or spaces. It will contain only uppercase and/or 
lowercase letters.

If the phrase is over half vowels, it should return true:

hasMoreVowels('moose') // true If it’s half vowels (or less), it’s false:

hasMoreVowels('mice') // false hasMoreVowels('graph')

Don’t consider “y” as a vowel: // false

hasMoreVowels('yay') // false Uppercase vowels are still vowels:

hasMoreVowels('Aal') // true
 */

let hasMoreVowels = (word) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  let halfWord = word.length / 2

  for (let char of word.toLowerCase()) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }
  if (vowelCount >= halfWord) {
    return true
  } else {
    return false
  }
};

let hasMoreVowels2 = (word) => 

console.log(hasMoreVowels("moose")); //true
console.log(hasMoreVowels("mice")); //false
console.log(hasMoreVowels("y")); //false
console.log(hasMoreVowels("yay")); //false
console.log(hasMoreVowels("Aal")); //true
