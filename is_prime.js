let finalTerm=100
for (let isPrime = 2; isPrime < finalTerm; isPrime = isPrime + 1) {
    let factors = 0;
    let currentNumber = 2;
    while (currentNumber < isPrime) {
        if (isPrime % currentNumber == 0) {
            factors = factors + 1;
            break;
        }
        currentNumber = currentNumber + 1
    }
    if (factors == 0) {
        console.log(isPrime);
    }
} 
