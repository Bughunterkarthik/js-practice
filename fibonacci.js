let numbersToBePrinted = 6;
let firstNumber = 0;
let secondNumber = 1;
let thirdNumber = firstNumber + secondNumber;
let countOfPrintedNumbers = 2;
console.log(firstNumber, secondNumber);

if(countOfPrintedNumbers <= numbersToBePrinted){
    console.log(thirdNumber);
    firstNumber = secondNumber;
    secondNumber = thirdNumber;
    thirdNumber = firstNumber + secondNumber;
    countOfPrintedNumbers = countOfPrintedNumbers + 1;
}

if(countOfPrintedNumbers <= numbersToBePrinted){
    console.log(thirdNumber);
    firstNumber = secondNumber;
    secondNumber = thirdNumber;
    thirdNumber = firstNumber + secondNumber;
    countOfPrintedNumbers = countOfPrintedNumbers + 1;
}

if(countOfPrintedNumbers <= numbersToBePrinted){
    console.log(thirdNumber);
    firstNumber = secondNumber;
    secondNumber = thirdNumber;
    thirdNumber = firstNumber + secondNumber;
    countOfPrintedNumbers = countOfPrintedNumbers + 1;

}

if(countOfPrintedNumbers <= numbersToBePrinted){
    console.log(thirdNumber);
    firstNumber = secondNumber;
    secondNumber = thirdNumber;
    thirdNumber = firstNumber + secondNumber;
    countOfPrintedNumbers = countOfPrintedNumbers + 1;
}
