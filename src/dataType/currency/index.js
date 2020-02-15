module.exports = function({ prefix, min, max }) {
  const value = Math.random() * (max - min) + min;
  return `${prefix} ${parseFloat(value).toFixed(2)}`;
};
