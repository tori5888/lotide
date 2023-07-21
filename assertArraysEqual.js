const eqArrays= require('./eqArrays');


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: Arrays are equal: [${array1}] === [${array2}]`);
    return;
  }
  console.log(`❌ Assertion Failed: Arrays are not equal: [${array1}] !== [${array2}]`);
};

module.exports = assertArraysEqual;