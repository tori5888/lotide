// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  //check to see which names are in the array
  for (const name of allItems) {
    if (!itemsToCount[name]) {
      continue;
    }

    //check to see if the name is in results
    if (!results[name]) {
      results[name] = 0
    }

// if name is t
    results[name]++;
  }

  return results;
};

module.exports = countOnly;

