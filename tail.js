const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return;
  }

  // if fails
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(array) {
  if (array.length <= 1) {
    return [];
  }

  return array.slice(1);
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!