const input = 8;
let factorial = 1; 
let currentTerm = 1;
while(currentTerm <= input){
    factorial = factorial * currentTerm ;
    currentTerm = currentTerm + 1;
}
console.log("Factorial of", input ,"is",factorial);
