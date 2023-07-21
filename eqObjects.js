//compares two objects for equality
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {   //check if  objects have diff # of keys
    return false;
  }

  //iterates over keys of first object
  for (let key of Object.keys(object1)) {
    //checks if both values for current key are arrays and if they don't match using eqArrays function
    if (Array.isArray(object1[key]) && Array.isArray(object2[key]) && !eqArrays(object1[key], object2[key])) {
      return false;
    }
  }

//happy path if all checks pass
  return true;
};



module.exports = eqObjects;