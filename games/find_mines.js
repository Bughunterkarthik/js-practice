function underline() {
  return "-". repeat(10);
}

function mines() {
  const minesLocation = [];
  for (let currMine = 0; currMine < 8; currMine++) {
    minesLocation.push(Math.floor(Math.random() * 100))
  }
  return minesLocation;
}

function playAgain() {
  const confirmation = confirm("Do you want to play again: ");

  if (confirmation) {
    return play();
  }

  return;
}

function findMines(minesLocation, guessesLeft, minesFound) {
   const userGuessAsString = prompt(" Enter your number: ");
  const userGuess = parseInt(userGuessAsString);
  if(minesLocation.includes(userGuess)) {
    console.log(" 💣 ✂️ ✅you defused one mine")
    return 1;
  }
  if(minesFound !== 10 && guessesLeft <= 0) {
    return "💀 you are die";
  }
  console.log("you didn't refuse a bomb in your previous chance");
  return 0;
}

function play() {
  const minesLocation = mines();
  let guessesLeft = 10;
  let minesFound = 0;
  console.log(`you have to defuse ${minesLocation.length} mines in ${guessesLeft} chances otherwise you will lose`);
  while(minesFound !== 10 && guessesLeft > 0) {
    guessesLeft = guessesLeft - 1
    minesFound = minesFound + findMines(minesLocation, guessesLeft, minesFound);
    if(minesFound === 10) {
      console.log(" You defused all mines now you are safe");
    }
  }
  console.log("mines locations are: ");
  console.log(minesLocation);

    for (let i = 0; i < 1000000000; i++);

  playAgain();
}

function main() {
  console.clear();
  console.log("\t\t   RULES");
  console.log("\t\t", underline());
  console.log("\tWe activated bombs at different location");
  console.log("\tThese locations denoted by numbers");
  console.log("\tYour role is to defuse the bombs by enter that location number");
  console.log("\tlocation range is 0-100");
  console.log("\tAll the best");

  play();
}
main();
