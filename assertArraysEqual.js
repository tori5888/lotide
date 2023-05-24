const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: Arrays are equal: [${array1}] === [${array2}]`);
    return;
  }
  console.log(`❌ Assertion Failed: Arrays are not equal: [${array1}] !== [${array2}]`);
};

// Example usage:
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Expected output: "✅ Assertion Passed: Arrays are equal: [1, 2, 3] === [1, 2, 3]"
assertArraysEqual([1, 2, 3], [1, 2, 4]); // Expected output: "❌ Assertion Failed: Arrays are not equal: [1, 2, 3] !== [1, 2, 4]"
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);