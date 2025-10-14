function createSecretNumber() {
  return Math.floor(Math.random() * 150)
}

function green(text) {
  return "\x1B[32m" + text + "\x1B[0m";
}

function bold(text) {
  return "\x1B[1m" + text + "\x1B[0m";
}

function red(text) {
  return "\x1B[31m" + text + "\x1B[0m";
}

function playAgain() {
  const confirmation = confirm("Do you want to play again: ");

  if (confirmation) {
    return play();
  }

  return;
}

function hint(guess, secertNumber) {
  if (guess > secertNumber) {
    return "\t 🔑 number to guess is smaller";
  } else {
    return "\t 🔑 number to guess is bigger";
  }
}

function chooseLevel() {
  console.log("\nCHOOSE DIFFICULTY LEVEL")
  const chooseDifficult = prompt(`    1 for easy
    2 for medium
    3 for hard: \n`);
  const chooseNoOfGuesses = [10, 7, 5];
  const level = parseInt(chooseDifficult);
  const numberAndGuess = [];
  numberAndGuess.push(createSecretNumber());
  numberAndGuess.push(chooseNoOfGuesses[level - 1]);
  return numberAndGuess;
}

function guessTheNumber(secertNumber) {
  const userGuessAsString = prompt(" Enter your number: ");
  const userGuess = parseInt(userGuessAsString);

  if (userGuess === secertNumber) {
    console.log(green("\n\t 🌟 your guess is correct"));
    return false;
  } else {
    console.log(red(" \t ❌ wrong guess"));
    console.log(hint(userGuess, secertNumber));
    return true;
  }
}

function play() {
  console.clear();
  const numberAndGuess = chooseLevel();
  const secertNumber = numberAndGuess[0];
  let currNoOfGuess = 1;
  let isGuessRight = true;
  const maxGuesses = numberAndGuess[1];
  console.log(`You have guess a number between 0 and 150 in ${maxGuesses} chances`);

  while (currNoOfGuess <= maxGuesses && isGuessRight) {
    isGuessRight = guessTheNumber(secertNumber);
    console.log(bold(`\n Remaining guess: ${maxGuesses - currNoOfGuess}`));
    currNoOfGuess = currNoOfGuess + 1;
  }

  console.log("Number is guess is: ", secertNumber);
  for (let i = 0; i < 1000000000; i++) {
    //delay
  }
  return playAgain();
}

play();
