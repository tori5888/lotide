const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const assertArrayEquals = (arr1, arr2) => {
  const isEqual = eqArrays(arr1, arr2);
  const message = isEqual ? "Arrays are equal" : "Arrays are not equal";
  console.log(message);
};

const takeUntil = (array, callback) => {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    }
    results.push(item);
  }
  return results;
};

// Test Case 1: Take elements until a number less than 5 is encountered
const numbers = [1, 3, 7, 2, 4, 6, 8];
const results1 = takeUntil(numbers, num => num < 5);
assertArrayEquals(results1, [1, 3]);

// Test Case 2: Take elements until an empty string is encountered
const strings = ["hello", "world", "", "this", "is", "a", "test"];
const results2 = takeUntil(strings, str => str === "");
assertArrayEquals(results2, ["hello", "world"]);

// Test Case 3: Take elements until a boolean value of true is encountered
const booleans = [false, false, true, false, true, true];
const results3 = takeUntil(booleans, bool => bool);
assertArrayEquals(results3, [false, false]);

//test case 1 from module
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results4 = takeUntil(data1, x => x < 0);
console.log(results4);

//test case 2 from module
console.log('---');

//test case 3 from module
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results5 = takeUntil(data2, x => x === ',');
console.log(results5);


module.exports = takeUntil;