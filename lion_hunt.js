const testCase1 = "Z Z Z";
const spaceBetweenLionAndZebra = -1;
let countOfLions = 0;
let countOfZebra = 0;
let index = 0;

for (let index = 0; index < testCase1.length; index++) {
    countOfLions = (testCase1[index] === 'L') ? countOfLions = countOfLions + 1 : countOfLions
    countOfZebra = (testCase1[index] === 'Z') ? countOfZebra = countOfZebra + 1 : countOfZebra
}

console.log("count of lions: ", countOfLions, "\n count of zebra: ", countOfZebra);
