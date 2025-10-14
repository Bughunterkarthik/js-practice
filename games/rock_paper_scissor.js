let USER_SCORE = 0;
let BOT_SCORE = 0;

function underline() {
  return "-".repeat(10);
}

function playAgain() {
  const confirmation = confirm("Do you want to play again: ");

  if (confirmation) {
    return game();
  }

  return;
}

function choice() {
  return Math.floor(Math.random() * 3) + 1;
}

function allWinningPossibility() {
  const pairs = ["11", "13", "12", "22", "21", "23", "33", "32", "31"];
  return pairs;
}

function score(choices) {
  const winPossibilities = allWinningPossibility();
  const index = winPossibilities.indexOf(choices);
  switch (index % 3) {
    case 0:
      return "draw";
    case 1:
      BOT_SCORE++;
      return "bot wins";
    case 2:
      USER_SCORE++;
      return "user wins";
  }
}

function enterChoice() {
  const botChoice = choice();
  let userChoose = prompt(`\t1 for ROCK
    \t2  for PAPER
    \t3 for SCISSORS`);
  return botChoice + userChoose;
}

function game() {
  while (USER_SCORE < 3 && BOT_SCORE < 3) {
    const choices = enterChoice();
    console.log(score(choices));
  }

  if (USER_SCORE === 3) {
    console.log("🏆 User wins series");
  } else {
    console.log("🏆 Bot wins series");
  }

  rules();
}

function rules() {
  console.clear();
  console.log("\t\t   RULES");
  console.log("\t\t", underline());
  console.log("\t - This game is in between you and a bot");
  console.log("\t - Whoever wins the first 3 matches wins the series ");
  playAgain();
}

rules();
