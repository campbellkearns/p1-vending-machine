class VendingMachine {
  constructor() {
    this.snacks = []
    this.balance = 0
  }

  seeSelections() {
    return this.snacks;
  }

  stock(newSnacks) {
    newSnacks.forEach(snack => {
      this.snacks.push(snack)
    });
  }

}

module.exports = VendingMachine