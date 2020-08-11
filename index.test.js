// Given the below invocations of an add() function,

// add(0,7) // returns 7  
// add(-4, 6) // returns an error "both arguments must be nonnegative integers"  
// add(6) // returns an error "two arguments required"  
// add("Hello", 5) // returns an error "both arguments must be Numbers"  
// Write the appropriate unit tests for the .add() function given the following requirements:

// function requires two arguments
// both arguments must be numbers
// doesn't accept negative numbers
const add = require('./index.js')

describe("Add function", () => {
  test('returns a message to the user if there are fewer than two arguments', () => {
    expect(add(6)).toEqual("two arguments required");
  })
})