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

module.exports = assertArraysEqual;