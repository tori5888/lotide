const assertArraysEqual = require('../assertArraysEqual');


// Example usage:
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Expected output: "✅ Assertion Passed: Arrays are equal: [1, 2, 3] === [1, 2, 3]"
assertArraysEqual([1, 2, 3], [1, 2, 4]); // Expected output: "❌ Assertion Failed: Arrays are not equal: [1, 2, 3] !== [1, 2, 4]"
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);