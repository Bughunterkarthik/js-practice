function underline() {
  return "-".repeat(10);
}

function playAgain() {
  const confirmation = confirm("Do you want to continue: ");

  if (confirmation) {
    return game();
  }

  return;
}

function password() {
  return Math.floor(Math.random() * 9000) + 1000;
}

function countBulls(guess, password) {
  let bullsCount = 0;
  const bullsThisTime = [];

  for (let index = 0; index < password.length; index++) {
    if (guess[index] === password[index] && !bullsThisTime.includes(index)) {
      bullsThisTime.push(index)
      bullsCount++;
    }
  }
  countCows(guess, password, bullsThisTime);

  console.log("\tBulls location:  ", bullsThisTime);
  if (bullsThisTime.length === password.length) {
    console.log("🏆 You won");
  }
  return bullsThisTime;
}

function countCows(guess, password, bullsThisTime) {
  let cowsCount = 0;

  for (let index = 0; index < password.length; index++) {
    if (password.includes(guess[index]) && !bullsThisTime.includes(index)) {
      cowsCount = cowsCount + 1;
    }
  }

  console.log("\tNo of cows in this guess: ", cowsCount);
  return;
}

function guessPassword() {
  const guess = prompt("\n\t Take a random guess: ");
  return guess;
}

function game() {
  console.clear();
  const storePassword = password() + "";
  let guessedBullsLocation = [];
  let remainingGuesses = 6;
  while (remainingGuesses > 0 && guessedBullsLocation.length !== storePassword.length) {
    const guess = guessPassword();
    guessedBullsLocation = countBulls(guess, storePassword);
    remainingGuesses = remainingGuesses - 1
    if (remainingGuesses === 0 && guessedBullsLocation.length !== storePassword.length) {
      console.log("you lost");
    }
  }
  console.log("The actual number is: ", storePassword);

  playAgain();
}

function rules() {
  console.clear();
  console.log("\t\t   RULES");
  console.log("\t\t", underline());
  console.log("\t - you have to guess the four digit number");
  console.log("\t - you will enter a four digit number");
  console.log("\t - all must be numbers");
  console.log("\t - after entering the number it shows number of cows and bulls location");
  console.log("\t - bulls means correct digit in correct position");
  console.log("\t - cow means correct number but in wrong position");
  console.log("\t - You have 6 chances to guess");
  playAgain();
}

rules();

function replace(string, index, char) {
  let newString = "";
  for (let i = 0; i < index; i++) {
    newString += string[i];
  }
  newString += char;
  for (let i = index + 1; i < string.length; i++) {
    newString += string[i];
  }
  console.log(newString)
}
