const safePosition = [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9], [1, 1],
[2, 1], [2, 2], [2, 3], [3, 3], [4, 3], [4, 4], [4, 5], [5, 5], [6, 5], [6, 6], [7, 6], [8, 6], [9, 6]
];

const WIN_COORDINATES = [[9, 0], [9, 1], [9, 2], [9, 3], [9, 4], [9, 5], [9, 6], [9, 7], [9, 8], [9, 9]];

const START_POS = [0, 0];
const BOARD = [
  ['🧍‍♀️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️',],
  ['⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️',],
  ['⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️',],
  ['⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️',],
  ['⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️',],
  ['⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️',],
  ['⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️',],
  ['⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️',],
  ['⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️',],
  ['⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️',],
];

function delay() {
  for (let i = 0; i < 2000000000; i++);
}

function printBoard() {
  console.clear();
  // console.log(safePosition)
  console.log("W - up\nA-left\nS-down\nD-right");
  for (let index = 0; index < BOARD.length; index++) {
    console.log(BOARD[index].join(""));
  }
}

function includes(coordinates) {
  const xCoordinate = coordinates[0];
  const yCoordinate = coordinates[1];
  // console.log(xCoordinate, yCoordinate)
  for (let index = 0; index < safePosition.length; index++) {
    const pos1 = safePosition[index][0];
    const pos2 = safePosition[index][1];
    if (pos1 === xCoordinate && pos2 === yCoordinate) {
      return true
    }
  }
  return false;
}

function getDirections(currX, currY) {
  let newX = currX;
  let newY = currY;
  const direction = prompt("Enter character: ");
  // console.log(direction.toLowerCase())
  // console.log(newX, newY)
  switch (direction) {
    case 'w':
      newX = newX - 1;
      break;
    case 'd':
      newY = newY + 1;
      break;
    case 'a':
      newY = newY - 1;
      break;
    case 's':
      newX = newX + 1;
      break;
  }
  return [newX, newY];
}

function changeLocation(newCoordinates, currX, currY) {
  const newX = newCoordinates[0];
  const newY = newCoordinates[1];
  // console.log(newX, newY)
  BOARD[currX][currY] = "⬜️";
  BOARD[newX][newY] = "🧍‍♀️";
}

function checkSafe(newCoordinates) {
  const newX = newCoordinates[0];
  const newY = newCoordinates[1];
  // console.log(newX, newY);
  if (includes(newCoordinates)) {
    return [newX, newY];
  }
  console.log("you stepped on the bomb !!");
  delay();
  return [0, 0]
}

function game() {
  let currX = START_POS[0];
  let currY = START_POS[1];
  printBoard()
  while (!WIN_COORDINATES.includes([currX, currY])) {

    let newCoordinates = getDirections(currX, currY);
    newCoordinates = checkSafe(newCoordinates)
    changeLocation(newCoordinates, currX, currY);
    currX = newCoordinates[0];
    currY = newCoordinates[1];
    printBoard();
  }
}

game();
