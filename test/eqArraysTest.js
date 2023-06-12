const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Example usage:
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // Expected output: "✅ Assertion Passed: true === true"
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false); // Expected output: "✅ Assertion Passed: false === false"
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // Expected output: "✅ Assertion Passed: false === false"