//function to compare the two arrays for equality
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) { // check if arrays are diff length
    return false;
  }

  //compares each element of the arrays
  return arr1.every((element, index) => element === arr2[index]);
};

//func to assert equality of actual & expected values
const assertEqual = function(actual, expected) {
  //determines the assertion result message based on actual and expected values
  const assertionMessage = actual === expected ? '✅ ✅ ✅ Assertion Passed' : '❌ ❌ ❌ Assertion Failed';
  console.log(`${assertionMessage}: ${actual} === ${expected}`); //print
};

//compares two objects for equality
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {   //check if  objects have diff # of keys
    return false;
  }

  //iterates over keys of first object
  for (let key of Object.keys(object1)) {
    //checks if both values for current key are arrays and if they don't match using eqArrays function
    if (Array.isArray(object1[key]) && Array.isArray(object2[key]) && !eqArrays(object1[key], object2[key])) {
      return false;
    }
  }

//happy path if all checks pass
  return true;
};


//tests

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);


const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);