const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return;
  }

  // if fails
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


const tail = (array) => (array.length <= 1 ? [] : array.slice(1));



module.exports = tail;