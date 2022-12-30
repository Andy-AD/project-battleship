import Gameboard from "./gameboardFactory";
import Ship from "./shipFactory";

describe("Gameboard tests", () => {
  let newGameboard = Gameboard();
  let board = newGameboard.getBoard();
  test("board has 10 rows", () => {
    expect(Object.keys(board).length).toBe(10);
  });
  test("board has 10 columns", () => {
    for (let row in board) {
      expect(Object.keys(board[row]).length).toBe(10);
    }
  });
  test("board coordinate 1 A equals null", () => {
    expect(board[1].A).toBeNull();
  });
  test("board row 0 to be undefined", () => {
    expect(board[0]).toBeUndefined();
  });
  let newShip = Ship(1);
  test("place ship at 1 a with length 1 horizontally to equal true", () => {
    expect(newGameboard.placeShip("1a", "horizontal", newShip)).toBe(true);
  });
  test("1 A should contain ship", () => {
    let updatedBoard = newGameboard.getBoard();
    expect(updatedBoard[1].A).toStrictEqual(newShip);
  });
  let newShip2 = Ship(4);
  test("place ship at 5 a with length 4 vertically to equal true", () => {
    expect(newGameboard.placeShip("5a", "vertical", newShip2)).toBe(true);
  });
  test("8 a should contain ship", () => {
    let updatedBoard = newGameboard.getBoard();
    expect(updatedBoard[8].A).toBe(newShip2);
  });
  let newShip3 = Ship(2);
  test("place ship at 2 H with length 2 horizontal to equal true", () => {
    expect(newGameboard.placeShip("2h", "horizontal", newShip3)).toBe(true);
  });
  test("2 I should contain ship", () => {
    let updatedBoard = newGameboard.getBoard();
    expect(updatedBoard[2].I).toBe(newShip3);
  });
  let newShip4 = Ship(1);
  test("placing ship on coordinate which has ship should return false", () => {
    expect(newGameboard.placeShip("2h", "horizontal", newShip4)).toBe(false);
  });
  test("placing ship on  adjacent coordinate which has ship should return false", () => {
    expect(newGameboard.placeShip("1j", "horizontal", newShip4)).toBe(false);
  });
  test("checking board", () => {
    let updatedBoard = newGameboard.getBoard();
    expect(updatedBoard).toBe(newShip3);
  });

});
