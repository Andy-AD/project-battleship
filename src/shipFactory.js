export default function Ship(length) {
  return {
    length,
    numberOfHits: 0,
    isSunk: function () {
      return this.length - this.numberOfHits > 0 ? false : true;
    },
    hit: function () {
      this.numberOfHits++;
    },
  };
}
