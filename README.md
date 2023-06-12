# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

{
  "name" : "tori588",
  "email" : "tekalyniuk@hotmail.com",
}

## Usage

**Install it:**

`npm install @tori588/lotide`

**Require it:**

`const _ = require('@tori588/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Function that asserts whether two arrays are equal.
* `assertEqual`: Function that asserts whether two values are equal.
* `assertObjectsEqual`: Function that asserts whether two objects are equal.
* `countLetters`: Function that returns the counts of each letter in a string.
* `countOnly`: Function that takes an array of items and returns counts for a specific subset of those items.
* `eqArrays`: Function that compares two arrays for equality.
* `eqObjects`: Function that compares two objects for equality.
* `findKey`: Function that scans an object and returns the first key for which the callback returns a truthy value.
* `findKeyByValue`: Function that searches for a key on an object where its value matches a given value.
* `flatten`: Function that flattens an array of arrays into a single-level array.
* `head`: Function that retrieves the first element from an array.
* `functions`: List of all the functions in an object.
* `letterPositions`: Function that returns all the indices in a string where each character is found.
* `map`: Function that creates a new array with the results of calling a provided function on every element in the calling array.
* `middle`: Function that returns the middle element(s) of an array.
* `tail`: Function that retrieves every element except the head (first element) of an array.
* `takeUntil`: Function that returns a slice of the array with elements taken from the beginning until a specified condition is met.
* `without`: Function that removes specified elements from an array.
