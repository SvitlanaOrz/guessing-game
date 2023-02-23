class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.minN = min;
    this.maxN = max;
  }

  guess() {
    this.g = Math.round((this.maxN + this.minN) / 2);
    return this.g;
  }

  lower() {
    this.maxN = this.g;
  }

  greater() {
    this.minN = this.g;
  }
}

module.exports = GuessingGame;
