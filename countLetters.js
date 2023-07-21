const countLetters = function(stringToCount) {
  const noSpaces = stringToCount.split(" ").join("");
  // Remove spaces from the input string because they cannot be counter

  // Open an empty object to store the individual letter counts
  const savedLetters = {};

  for (const letters of noSpaces) {
    savedLetters[letters] = savedLetters[letters] ? savedLetters[letters] + 1 : 1;
    // If the current letter already exists in the object, increment its count by 1
    // Otherwise, set its count to 1
  }

  return savedLetters; // return the object with letter counts
};

module.exports = countLetters;
