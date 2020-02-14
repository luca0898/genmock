function currency(prefix, min, max) {
  const value = Math.random() * (max - min) + min;
  return `${prefix} ${parseFloat(value).toFixed(2)}`;
}

module.exports = { currency };
