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
const testCase11 = "L   ZZ  L";
const testCase12 = "Z   LL Z";
const testCase13 = "  L  ZL";
const testCase14 = "L  Z LL  ";


let closetSpace = -1;
let spaceBetweenLionAndZebra = 0;
let firstAnimalLocation = "";
let countOfLions = 0;
let countOfZebra = 0;
let previousAnimalFound;
const testCaseToUse = testCase14;
let location = 0;

// to find first animal location in the string
while (firstAnimalLocation === "" && location < testCaseToUse.length) {
    firstAnimalLocation = (testCaseToUse[location] === 'L' || testCaseToUse[location] === 'Z') ? firstAnimalLocation = location : firstAnimalLocation
    previousAnimalFound = (testCaseToUse[location] === 'L') ? 'L' : 'Z';
    location = location + 1;
}

// to count of lions and zebras in the string
while ((countOfLions === 0 || countOfZebra === 0) && location < testCaseToUse.length) {
    countOfLions = (testCaseToUse[location] === 'L') ? countOfLions = countOfLions + 1 : countOfLions
    countOfZebra = (testCaseToUse[location] === 'Z') ? countOfZebra = countOfZebra + 1 : countOfZebra
    location = location + 1;
}

// to find the spaces between a lion and a zebra 
if (countOfLions > 0 && countOfZebra > 0) {

    for (let index = firstAnimalLocation + 1; index < testCaseToUse.length; index++) {
        if (testCaseToUse[index] === " ") {
            spaceBetweenLionAndZebra = spaceBetweenLionAndZebra + 1;
        } else {
            if (testCaseToUse[index] !== previousAnimalFound) {
                closetSpace = (closetSpace === -1 || spaceBetweenLionAndZebra < closetSpace) ? closetSpace = spaceBetweenLionAndZebra : closetSpace
                previousAnimalFound = testCaseToUse[index];
            }
            spaceBetweenLionAndZebra = 0;
        }
    }
}



console.log("Input: ", testCaseToUse, "\nOutput: ", closetSpace);
