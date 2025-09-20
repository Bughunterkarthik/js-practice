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
for ( let index = 0; index < testCase1.length; index++){
    if(testCase1[index] === 'L' || testCase1[index] === 'Z'){
        firstAnimal = index;
        break;
    }
}
console.log(firstAnimal);

console.log("count of lions: ", countOfLions, "\n count of zebra: ", countOfZebra);
