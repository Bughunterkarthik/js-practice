const stringToBeChecked = "aa";
const lengthOfString = stringToBeChecked.length;
let CountOfEqualCharacters = 0;

for (let stringIndex = 0; stringIndex < lengthOfString; stringIndex++) {
    if (stringToBeChecked[stringIndex] === stringToBeChecked[lengthOfString - stringIndex - 1]) {
        CountOfEqualCharacters = CountOfEqualCharacters + 1
    }
    stringIndex = stringIndex + 1
}

const suffix = (CountOfEqualCharacters === lengthOfString / 2) ? "is a palindrome" : "is not a palindrome"

console.log(stringToBeChecked, suffix);

