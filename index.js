// index.js
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
// const assertEqual2 = require('./assertEqual2');
const countLetters = require('./countLetters');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const countOnly = require('./countOnly');
const findKeyByValue = require('./findKeyByValue');
const eqArrays = require('./eqArrays');
const letterPositions = require('./letterPositions');
const takeUntil = require('./takeUntil');
const map = require('./map');


module.exports = {
  head,
  map,
  tail,
  middle,
  // assertEqual2,
  countLetters,
  findKeyByValue,
  takeUntil,
  letterPositions,
  countOnly,
  findKey,
  eqObjects,
  assertArraysEqual,
  assertEqual,
  eqArrays,
};


