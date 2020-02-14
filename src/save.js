const fs = require("fs");

function save(result) {
  fs.writeFile("output.json", result, "utf8", function(err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }
    console.log("JSON file has been saved.");
  });
}

module.exports = { save };
