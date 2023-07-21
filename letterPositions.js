const letterPositions = function(sentence) {
  const results = {}; //creates an empty object to store the letter positions

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') { // code to ignore spaces in sentence/phrase
      if (results[sentence[i]] === undefined) { //checks if the letter is already a key in results object
        results[sentence[i]] = []; // if NOT, initializes an empty array for that letter that is not already a key in the results bar
      }
      results[sentence[i]].push(i); //adds current position letter to corresponding array in results object
    }
  }

  return results; // prints the letter positions to the console
};


module.exports = letterPositions;