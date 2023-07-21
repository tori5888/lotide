const assertEqual = require('../assertEqual');

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  } //returns undefined (implicitly) if key not found
};


module.exports = findKey;
