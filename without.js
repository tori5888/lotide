const assertArraysEqual = (arr1, arr2) => {
  const areEqual = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);

  if (areEqual) {
    console.log("Arrays are equal.");
  } else {
    console.log("Arrays are not equal.");
  }
};

const without = (source, itemsToRemove) => {
  return source.filter(item => !itemsToRemove.includes(item));
};

// Test cases

// Test case 1
const result1 = without([1, 2, 3], [1]);
console.log(result1); // Output: [2, 3]
assertArraysEqual(result1, [2, 3]);

// Test case 2
const result2 = without(["1", "2", "3"], [1, 2, "3"]);
console.log(result2); // Output: ["1", "2"]
assertArraysEqual(result2, ["1", "2"]);

// Test case 3
const words = ["hello", "world", "lighthouse"];
const result3 = without(words, ["lighthouse"]);
console.log(result3); // Output: ["hello", "world"]
assertArraysEqual(result3, ["hello", "world"]);

// Test case 4
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // Output: Arrays are equal.