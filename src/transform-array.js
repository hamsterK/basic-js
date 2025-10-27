const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // Remove line below and write your code here
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const newArr = [];
  let flag = null;
  let flagDiscardedNext = false;
  arr.forEach((item, index) => {
    switch (item) {
      case '--discard-next':
        flag = '--discard-next'
        flagDiscardedNext = true;
        break;
      case '--discard-prev':
        if (newArr.length > 0 && flag !== '--discard-next' && !flagDiscardedNext) {
          newArr.pop();
        }
        flagDiscardedNext = false;
        break;
      case '--double-next':
        flag = '--double-next'
        flagDiscardedNext = false;
        break;
      case '--double-prev':
        if (newArr.length > 0 && flag !== '--discard-next' && !flagDiscardedNext) {
          newArr.push(newArr[newArr.length - 1]);
        }
        flagDiscardedNext = false;
        break;
      default:
        if (flag === '--discard-next') {
          flag = null;
        } else if (flag === '--double-next') {
          newArr.push(item);
          newArr.push(item);
          flag = null;
        } else {
          newArr.push(item);
        }
        break;
  }
    });
  return newArr;
}

module.exports = {
  transform
};
