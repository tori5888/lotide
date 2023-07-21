function flatten(arr) {
  return arr.reduce((result, element) => {
    if (Array.isArray(element)) {
      // If the current element is an array, then the flatten function is called recursively on that array
      result = result.concat(flatten(element));

    } else {
      // If the current element is not an array, it's just pushed to the result array.
      result.push(element);
    }
    return result;
  }, []);
}

module.exports = flatten;