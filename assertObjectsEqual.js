// // Function to compare two objects for equality
// const eqObjects = function(object1, object2) {
//   // Implementation of eqObjects function (assuming you already have it)
//   // ...
// };

// // Function to assert equality of two objects
// const assertObjectsEqual = function(actual, expected) {
//   // Compare the objects using eqObjects function
//   const objectsAreEqual = eqObjects(actual, expected);

//   // Generate the assertion message
//   const assertionMessage = objectsAreEqual ? '✅ ✅ ✅ Objects are equal' : '❌ ❌ ❌ Objects are not equal';

//   // Print the assertion message
//   console.log(assertionMessage);
// };

// // Example usage
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 2, a: 1 };
// const obj3 = { a: 1, b: 3 };

// assertObjectsEqual(obj1, obj2); // Output: ✅ ✅ ✅ Objects are equal
// assertObjectsEqual(obj1, obj3); // Output: ❌ ❌ ❌ Objects are not equal


const eqArrays = function(arr1, arr2) {
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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return;
  }
  console.log(`🛑 🛑 🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};



//TEST
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // should pass

const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // should fail