const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const assertArrayEquals = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    console.error("Arrays have different lengths");
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.error(`Arrays differ at index ${i}`);
      return false;
    }
  }

  console.log("Arrays are equal");
  return true;
};


// test Case 1: Transform each word to uppercase
const results1 = map(words, word => word[0]);
console.log(results1);


// test Case 2: Get the length of each word
const results2 = map(words, word => word.length);
console.log(results2);

// test Case 3: Add an exclamation mark at the end of each word
const results3 = map(words, word => word + "!");
console.log(results3);

module.exports = map;