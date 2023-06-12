// test/headTest.js

const head = require('../head');
const assertEqual = require('../assertEqual');


// Test assertions
assertEqual(head([5, 6, 7]), 5); // ✅✅✅ Assertion Passed: 5 === 5
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // ✅✅✅ Assertion Passed: Hello === Hello
