function checkIfExists(path) {
  return !!require("fs").existsSync(path);
}

module.exports = { checkIfExists };
