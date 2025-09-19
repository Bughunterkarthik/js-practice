let numberToBeChecked = 1;
const limit = 100;
while(numberToBeChecked <= limit){
    const isEven = numberToBeChecked % 2 === 0 ? true : false;
    const suffix = isEven ? "is a even number" : "is a odd number";
    console.log(numberToBeChecked, suffix);
    numberToBeChecked = numberToBeChecked + 1
}
