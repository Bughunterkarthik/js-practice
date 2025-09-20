const testCase1 = "Z Z Z";
const spaceBetweenLionAndZebra = -1;
let countOfLions = 0;
let countOfZebra = 0;
let index = 0;
let firstAnimal;

for (let index = 0; index < testCase1.length; index++) {
    countOfLions = (testCase1[index] === 'L') ? countOfLions = countOfLions + 1 : countOfLions
    countOfZebra = (testCase1[index] === 'Z') ? countOfZebra = countOfZebra + 1 : countOfZebra
}
for (let index = 0; index < testCase1.length; index++) {
    if (testCase1[index] === 'L' || testCase1[index] === 'Z') {
        firstAnimal = index;
        break;
    }
}
if (countOfLions > 0 && countOfZebra > 0) {
    if (testCaseToUse[index] === " ") {
        spaceBetweenLionAndZebra = spaceBetweenLionAndZebra + 1;
    } else {
        closetSpace = (closetSpace === -1 || spaceBetweenLionAndZebra < closetSpace) ? closetSpace = spaceBetweenLionAndZebra : closetSpace
        spaceBetweenLionAndZebra = 0;
    }
    if (testCaseToUse[index] === " ") {
        spaceBetweenLionAndZebra = spaceBetweenLionAndZebra + 1;
    } else {
        closetSpace = (closetSpace === -1 || spaceBetweenLionAndZebra < closetSpace) ? closetSpace = spaceBetweenLionAndZebra : closetSpace
        spaceBetweenLionAndZebra = 0;
    }
    if (testCaseToUse[index] === " ") {
        spaceBetweenLionAndZebra = spaceBetweenLionAndZebra + 1;
    } else {
        closetSpace = (closetSpace === -1 || spaceBetweenLionAndZebra < closetSpace) ? closetSpace = spaceBetweenLionAndZebra : closetSpace
        spaceBetweenLionAndZebra = 0;
    }
    
}

console.log("Input: ", testCase1, "Output: ", spaceBetweenLionAndZebra);
