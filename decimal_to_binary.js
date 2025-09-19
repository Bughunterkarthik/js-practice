let input = 11;
let binary = 0;
let quotient;
let remainder;
let placeInNumberSystem=1;
while(input > 0){
    remainder = input % 2;
    input = input % 2 == 0 ? input : input -1;
    binary = placeInNumberSystem * remainder + binary;
    input = input / 2;
    placeInNumberSystem = placeInNumberSystem * 10;
}
console.log(binary)
