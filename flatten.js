function flatten(arr) {
  return arr.reduce((result, element) => {
    if (Array.isArray(element)) {
      result.push(...element);
    } else {
      result.push(element);
    }
    return result;
  }, []);
}

const result = flatten([1, 2, [3, 4], 5, [6]]);
console.log(result); // Output: [1, 2, 3, 4, 5, 6]

module.exports = flatten;