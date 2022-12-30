import Ship from "./shipFactory";

export default function Gameboard() {
  let board = createGameboard();

  const placeShip = (coordinate, allignment, ship) => {
    let [row, column] = splitCoordinates(coordinate);
    row = Number(row);
    if (!isValidCoordinate(row, column, board)) return false;
    for (let i = 0; i < ship.length; i++) {
      board[row][column] = ship;
      if (allignment === "horizontal") {
        column = String.fromCharCode(column.charCodeAt(0) + 1);
      } else {
        row++;
      }
    }
    return true;
  };

  const getBoard = () => board;

  return { getBoard, placeShip };
}

function createGameboard() {
  let board = {};
  for (let i = 1; i < 11; i++) {
    board[i] = {};
    for (let j = 65; j < 75; j++) {
      let char = String.fromCharCode(j);
      board[i][char] = null;
    }
  }
  return board;
}

function splitCoordinates(coordinate) {
  let coordinates = coordinate.split("");
  let row, column;
  if (coordinates.length === 3) {
    row = coordinates[0] + coordinates[1];
    column = coordinates[2].toUpperCase();
  } else {
    row = coordinates[0];
    column = coordinates[1].toUpperCase();
  }
  return [row, column];
}

function isValidCoordinate(row, column, board) {
  let rowNumbers, columnLetters;
  let isValid = true;
  if (row === 1) {
    rowNumbers = [1, 2];
  } else if (row === 10) {
    rowNumbers = [9, 10];
  } else {
    rowNumbers = [row - 1, row, row + 1];
  }
  if (column === "A") {
    columnLetters = ["A", "B"];
  } else if (column === "J") {
    columnLetters = ["I", "J"];
  } else {
    columnLetters = [
      String.fromCharCode(column.charCodeAt(0) - 1),
      column,
      String.fromCharCode(column.charCodeAt(0) + 1),
    ];
  }
  rowNumbers.forEach((rowNumber) => {
    columnLetters.forEach((columnLetter) => {
      if (board[rowNumber][columnLetter]) {
        isValid = false;
      }
    });
  });
  return isValid;
}
