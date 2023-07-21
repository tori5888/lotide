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

module.exports = flatten;