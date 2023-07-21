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



module.exports = map;