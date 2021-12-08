/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      console.log('error');
      callback(error);
    } else {
      let splitData = data.split('\n');
      callback(null, splitData[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO

  request.get(url, (error, response) => {
    if (error) {
      console.log('error');
      callback(error);
    } else {
      callback (null, response.statusCode);
    }
  });
};
// Make the Callback Review tests pass
// [] commit "Complete bare_minimum/callbackReview"
// go on to Promise Constructor

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
