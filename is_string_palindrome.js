const stringToBeChecked = "aaaaa";
const lengthOfString = stringToBeChecked.length;
let CountOfEqualCharacters = 0;

if (lengthOfString % 2 !== 0){
    CountOfEqualCharacters = -0.5
}
for (let stringIndex = 0; stringIndex < lengthOfString / 2; stringIndex++) {
    if (stringToBeChecked[stringIndex] === stringToBeChecked[lengthOfString - stringIndex - 1]) {
        CountOfEqualCharacters = CountOfEqualCharacters + 1
    }
}

const suffix = (CountOfEqualCharacters === lengthOfString / 2) ? "is a palindrome" : "is not a palindrome"

console.log(stringToBeChecked, suffix);


