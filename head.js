const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
      return;
    }
    
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  };
  
  const head = function(array) {
    if (array.length === 0) {
      return undefined;
    }
    
    return array[0];
  };
  
  // Test assertions
  assertEqual(head([5,6,7]), 5); // ✅✅✅ Assertion Passed: 5 === 5
  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // ✅✅✅ Assertion Passed: Hello === Hello