const input = 100;
let numberOfFactors = 0;
let currentTerm = 1;
 while(currentTerm <= input){
     (input % currentTerm === 0) ? numberOfFactors = numberOfFactors + 1 : numberOfFactors ;
     currentTerm = currentTerm + 1;
 }
console.log("number of factors of ", input, "is",numberOfFactors);
