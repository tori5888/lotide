//takes an object and value as input, scans object to find the first key that contains given value
const findKeyByValue = function(object, value) {
  const keys = Object.keys(object); //finds array of keys from within object (eg. sci_fi)

  for (const key of keys) {
    if (object[key] === value) { //if current keys value matches given value, return key
      return key;
    }
  }

  return undefined; //happy trail -> if no key with the given value is found, return undefined
};

module.exports = findKeyByValue;