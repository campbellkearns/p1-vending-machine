const VendingMachine = require('./VendingMachine')
const Item = require('./Item')
describe("Vending Machine", () => {
  it("should display all available snacks", () => {
    // setup
    const vendingMachine = new VendingMachine()
    // exercise
    
    // assert
    expect(vendingMachine.seeSelections()).toEqual([])

  })

  it("should display newly stocked snacks", () => {
    // setup
    const vendingMachine = new VendingMachine()
    const kitKat = new Item('kit kat', 99, 9)
    const pistachios = new Item('pistachio', 299, 3)

    // exercise
    vendingMachine.stock([kitKat, pistachios])
    // assert
    expect(vendingMachine.seeSelections()).toEqual([
      { name: 'kit kat', price: 99, code: 9 },
      { name: 'pistachio', price: 299, code: 3 }
    ])
    // (teardown)

  })
})