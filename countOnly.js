// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  //check to see which names are in the array
  for (const name of allItems) {
    if (!itemsToCount[name]) {
      continue;
    }

    //check to see if the name is in results
    if (!results[name]) {
      results[name] = 0
    }

// if name is t
    results[name]++;
  }

  return results;
};

// define assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


// output - expected
const example = {
  "Jason": 1,
  "Fang": 2,
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

module.exports = countOnly;

