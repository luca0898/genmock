const fs = require("fs");

/**
 * Writes the data into a file
 *
 * @param {string} result - The data to write
 * @param {string} outFile - The file to write into. Default is ``output.json``
 */
function save(result, outFile = 'output.json') {
  fs.writeFile(outFile, result, "utf8", function(err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }
    console.log("JSON file has been saved.");
  });
}

module.exports = { save };
