const stringToBeChecked = "ABCCBA";
const lengthOfString = stringToBeChecked.length;
let CountOfEqualCharacters = 0;
let stringIndex

if(stringToBeChecked[stringIndex] === stringToBeChecked[lengthOfString - stringIndex - 1]){
    CountOfEqualCharacters = CountOfEqualCharacters +1
}
stringIndex = stringIndex + 1


if(stringToBeChecked[stringIndex] === stringToBeChecked[lengthOfString - stringIndex - 1]){
    CountOfEqualCharacters = CountOfEqualCharacters +1
}
stringIndex = stringIndex + 1

if(stringToBeChecked[stringIndex] === stringToBeChecked[lengthOfString - stringIndex - 1]){
    CountOfEqualCharacters = CountOfEqualCharacters +1
}
stringIndex = stringIndex + 1

if(stringToBeChecked[stringIndex] === stringToBeChecked[lengthOfString - stringIndex - 1]){
    CountOfEqualCharacters = CountOfEqualCharacters +1
}
stringIndex = stringIndex + 1

const suffix = (CountOfEqualCharacters === lengthOfString ) ? "is a palindrome" : "is not a palindrome"

console.log( stringToBeChecked,suffix);




if (lengthOfString % 2 !== 0){
    CountOfEqualCharacters = 0.5
}
