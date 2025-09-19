let numbersToBePrinted = 5;
let firstNumber = 0;
let secondNumber = 1;

for(let countOfPrintedNumbers = 0; countOfPrintedNumbers < numbersToBePrinted ; countOfPrintedNumbers++){
    console.log(firstNumber);
    const followedTerm = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = followedTerm;
}
