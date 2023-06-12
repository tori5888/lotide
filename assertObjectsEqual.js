const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false; //if arrays have diff lengths, they are not equal
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; //if any corresponding elements are not same the arrays are not equal
    }
  }

  return true; // happy path all are equal
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false; //if objects have different numbers of keys, they are not equal
  }

  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false; // if values of a key are arrays, compare them using eqArrays
      }
    }
    if (object1[key] !== object2[key]) {
      return false; //if values of a key are not equal -> objects are not equal
    }
  }

  return true; //all keys and values are equal -> so objects are equal
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return; //objects are equal -> assertion passed
  }
  console.log(`🛑 🛑 🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  //objects are not equal -> assertion failed
};

//TEST
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // should pass

const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // should fail



