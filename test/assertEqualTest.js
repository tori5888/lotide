// test/assertEqualTest.js

const assertEqual = require('../assertEqual');



// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); // Assertion Failed: Lighthouse Labs !== Bootcamp
assertEqual(1, 1); // Assertion Passed: 1 === 1
assertEqual("Hello", "Hello"); // Assertion Passed: Hello === Hello
assertEqual("OpenAI", "Open"); // Assertion Failed: OpenAI !== Open
assertEqual(10, 10); // Assertion Passed: 10 === 10
assertEqual(5, 7); // Assertion Failed: 5 !== 7
