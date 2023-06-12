const { assert } = require("chai");
const eqArrays = require('../eqArrays');

// // Example usage:
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // Expected output: "✅ Assertion Passed: true === true"
// assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false); // Expected output: "✅ Assertion Passed: false === false"
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // Expected output: "✅ Assertion Passed: false === false"


describe("#eqArrays", () => {
  it("should return true for ([1, 2, 3], [1, 2, 3])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("should return false for ([1, 2, 3], [1, 2, 4])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
  });
  it("should return false for ([1, 2, 3], [1, 2, 3, 4])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
  });

});