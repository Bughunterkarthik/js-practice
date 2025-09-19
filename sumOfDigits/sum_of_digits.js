const digitsToBeAdded = 234;
let remainingDigits = digitsToBeAdded;
let sumOfTheDigits = 0;

while (remainingDigits > 0) {
    const lastDigit = remainingDigits % 10;
    sumOfTheDigits = sumOfTheDigits + lastDigit;
    remainingDigits = (remainingDigits - lastDigit) / 10;
}

console.log("sum of the digits of", digitsToBeAdded, " is", sumOfTheDigits);
