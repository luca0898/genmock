/**
 * Picks a random element in a provided list.
 *
 * If [maxOutput] param is greater than one, than the return type will be a list;
 * In case of multiple picks, the picked data can be repeated.
 *
 * @param {*[]} items - The list to pick the element.
 * @param {number} count - The amount of items to pick. Default is 1
 * @returns {*[] | *} - A random element from the provided list, or a list of elements if [maxOutput] > 1
 */
module.exports = function({ items, count = 1 }) {
  const pickOne = () => items[Math.floor(Math.random() * items.length)];

  if (count === 1) {
    return pickOne()
  } else {
    return [...Array(count)].map(pickOne)
  }
};
