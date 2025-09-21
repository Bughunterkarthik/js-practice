const stringToBeChecked = "madam";
const lengthOfString = stringToBeChecked.length;
let CountOfEqualCharacters = 0;

const suffix = (CountOfEqualCharacters === lengthOfString ) ? "is a palindrome" : "is not a palindrome"

console.log( stringToBeChecked,suffix);
