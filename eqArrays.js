const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(array1, array2) {
  // Check if the arrays have the same length
  if (array1.length !== array2.length) {
    return false;
  }

  // Iterate over each element and compare them
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  // All elements match
  return true;
};

// Example usage:
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // Expected output: "✅ Assertion Passed: true === true"
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false); // Expected output: "✅ Assertion Passed: false === false"
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // Expected output: "✅ Assertion Passed: false === false"