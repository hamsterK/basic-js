const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // Remove line below and write your code here
  let sum = 0;
  const excludedColomns = new Set();
  for (let col = 0; col < matrix[0].length; col += 1) {
    for (let row = 0; row < matrix.length; row += 1) {
      if (col in excludedColomns) {
        break;
      }
      if (matrix[row][col] === 0) {
        excludedColomns.add(col);
        break;
      }
      sum += matrix[row][col];
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
