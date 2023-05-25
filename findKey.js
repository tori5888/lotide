// const assertEqual = (actual, expected) => {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.error(`❌ Assertion Failed: ${actual} !== ${expected}`);
//   }
// };



// const findKey = (obj, callback) => {
//   for (const key in obj) {
//     if (callback(obj[key])) {
//       return key;
//     }
//   }
//   return undefined;
// };

// // Test cases
// findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"

// // Test case 1: Finding the first restaurant with 2 stars
// const result1 = findKey(restaurants, x => x.stars === 2);
// assertEqual(result1, "noma");

// // Test case 2: Finding the first restaurant with 3 stars
// const result2 = findKey(restaurants, x => x.stars === 3);
// assertEqual(result2, "Akaleri");

// // Test case 3: Finding the first restaurant with 5 stars (not found)
// const result3 = findKey(restaurants, x => x.stars === 5);
// assertEqual(result3, undefined);




// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  } //returns undefined (implicitly) if key not found
};



// TESTING

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), "noma");  // => "noma"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), "Blue Hill");  // => "noma"