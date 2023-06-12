const { assert } = require("chai");
const tail = require("../tail");

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it("returns # 3 for words.length", () => {
    assert.strictEqual((words.length), 3);
  });
  it("returns # 2 for tail(words).length", () => {
    assert.strictEqual(tail(words).length, 2);
  });
  it("returns ['Lighthouse', 'Labs'] for tail(words)", () => {
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });
});