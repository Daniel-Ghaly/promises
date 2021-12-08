/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('needle');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
};

/** 5 Steps to writing a promise-returning function
 * 1. Create the promise with new Promise
 * 2. Do something aysnc then...
 *  1. pass the successful value into the resolve() function
 *    - this value will be made available in the next .then() block
 *    - only one value can ever be passed into resolve()
 *  2. Pass any errors into the reject() function
 *    - this error will be made available in the catch block
 * 3. return the promise instance. This should be synchronous
 */

// make Promise Constructor tests pass
// commit "Copmlete bare_minimum/promiseConstructor.js exercises"
// move on to Promisification.js

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
