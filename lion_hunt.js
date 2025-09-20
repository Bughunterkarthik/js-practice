const testCase1 = "LZ";
const testCase2 = "L Z";
const testCase3 = "L ZL";
const testCase4 = "L   Z  L Z";
const testCase5 = "L  ZL Z";
const testCase6 = "L     L";
const testCase7 = "Z   Z   Z";
const testCase8 = " Z L";
const testCase9 = "L  L Z  L"
const testCase10 = "    ";


let closetSpace = -1;
let spaceBetweenLionAndZebra = 0;
let firstAnimal = 0;
let countOfLions = 0;
let countOfZebra = 0;
const testCaseToUse = testCase8;
let index = 0;


while (firstAnimal === 0 && index < testCaseToUse.length) {
    firstAnimal = (testCaseToUse[index] === 'L' || testCaseToUse[index] === 'Z') ? firstAnimal = index : firstAnimal
    index = index + 1;
}

for (let index = 0; index < testCaseToUse.length; index++) {
    countOfLions = (testCaseToUse[index] === 'L') ? countOfLions = countOfLions + 1 : countOfLions
    countOfZebra = (testCaseToUse[index] === 'Z') ? countOfZebra = countOfZebra + 1 : countOfZebra
}

if (countOfLions > 0 && countOfZebra > 0) {

    for (let index = firstAnimal + 1; index < testCaseToUse.length; index++) {
        if (testCaseToUse[index] === " ") {
            spaceBetweenLionAndZebra = spaceBetweenLionAndZebra + 1;
        } else {
            closetSpace = (closetSpace === -1 || spaceBetweenLionAndZebra < closetSpace) ? closetSpace = spaceBetweenLionAndZebra : closetSpace
            spaceBetweenLionAndZebra = 0;
        }
    }
}



console.log("Input: ", testCaseToUse, "\nOutput: ", closetSpace);
