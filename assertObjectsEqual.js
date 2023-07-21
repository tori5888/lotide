const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return; //objects are equal -> assertion passed
  }
  console.log(`🛑 🛑 🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  //objects are not equal -> assertion failed
};

module.exports = assertObjectsEqual;

