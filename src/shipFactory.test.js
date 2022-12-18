import Ship from "./shipFactory";

describe("new ship", () => {
  let newShip = Ship(3);
  test("length equals 3", () => {
    expect(newShip.length).toBe(3);
  });

  test("numberOfHits equals 0", () => {
    expect(newShip.numberOfHits).toBe(0);
  });

  test("isSunk equal to false", () => {
    expect(newShip.isSunk()).toBe(false);
  });

  test("numberOfHits should equal to 1 after hit()", () => {
    newShip.hit();
    expect(newShip.numberOfHits).toBe(1);
  });
  test("isSunk() equals to true", () => {
    newShip.hit();
    newShip.hit();
    expect(newShip.isSunk()).toBe(true);
  });
});
