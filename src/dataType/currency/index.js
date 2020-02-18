module.exports = function({ prefix, min, max }) {
  const value = Math.random() * (max - min) + min;
  prefix = prefix ? `${prefix} ` : "";
  return prefix + parseFloat(value).toFixed(2);
};
