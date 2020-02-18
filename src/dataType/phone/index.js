module.exports = function({ pattern }) {
  let result = "";

  pattern.split("").map(value => {
    result += /^\d+$/.test(value) ? Math.floor(Math.random() * 9 + 1) : value;
  });

  return result;
};
