const middle = function(array) {
  const length = array.length;
  const middleIndex = Math.floor(length / 2);

  if (length <= 2) {
    return [];
  }

  if (length % 2 === 0) {
    return array.slice(middleIndex - 1, middleIndex + 1);
  }

  return [array[middleIndex]];
};


module.exports = middle;