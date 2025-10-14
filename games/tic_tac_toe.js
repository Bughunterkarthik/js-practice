const BOARD = ["🔳", "🔳", "🔳", "🔳", "🔳", "🔳", "🔳", "🔳", "🔳"];
const SYMBOLS = ["⭕️", "❌"];
const WIN_POSSIBILITIES = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

function createBoard() {
  for (let index = 0; index < BOARD.length; index += 3) {
    console.log(BOARD.slice(index, index + 3).join(""));
  }
}

function changeBoard(position, turn) {
  console.clear();
  const symbol = SYMBOLS[turn % 2];
  BOARD[position] = symbol;
  createBoard();
  return symbol;
}

function askPosition(userDetails, turn) {
  const position = prompt(`${userDetails[turn % 2]} => enter position: `);
  return position - 1;
}

function getUserDetails() {
  const user1Name = prompt("Enter first player name: ");
  const user2Name = prompt("Enter second player name: ");
  return [user1Name, user2Name];
}

function checkWin(userDetails, symbol, turn) {
  if (symbol === "") {
    return false;
  }
  for (let index = 0; index < WIN_POSSIBILITIES.length; index++) {
    const pos1 = WIN_POSSIBILITIES[index][0] - 1;
    const pos2 = WIN_POSSIBILITIES[index][1] - 1;
    const pos3 = WIN_POSSIBILITIES[index][2] - 1;

    if (BOARD[pos1] === symbol && BOARD[pos2] === symbol && BOARD[pos3] === symbol) {
      console.log(turn);
      console.log(userDetails[turn % 2], "wins the game");
      return true;
    }
  }
}

function isDraw(turn) {
  if (turn === 10) {
    console.log("draw game");
    return true
  }
}

function isPositionFull(position) {
  if (BOARD[position] === "🔳") {
    return true;
  }
  return false;
}

function game() {
  const userDetails = getUserDetails();
  createBoard();
  let currUserSymbol;

  for (let currTerm = 1; currTerm <= 10; currTerm++) {
    if (checkWin(userDetails, currUserSymbol, currTerm) || isDraw(currTerm)) {
      return;
    }

    const position = askPosition(userDetails, currTerm);
    if (!isPositionFull(position)) {
      console.log("That location is occupied");
      continue;
    }

    currUserSymbol = changeBoard(position, currTerm);
  }
}
game()
