const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // Remove line below and write your code here
  const n = matrix.length;
  const m = matrix[0].length;
  const result = [];

  for (let i = 0; i < n; i++) {
    result[i] = [];
    for (let j = 0; j < m; j++) {
      result[i][j] = 0;
    }
  }

  for (i = 0; i < n; i += 1) {
    for (j = 0; j < m; j += 1) {
      let cell = 0;
 try { cell += (matrix[i + 1][j] === true) ? 1 : 0; } catch {}
      try { cell += (matrix[i + 1][j + 1] === true) ? 1 : 0; } catch {}
      try { cell += (matrix[i][j + 1] === true) ? 1 : 0; } catch {}
      try { cell += (matrix[i - 1][j + 1] === true) ? 1 : 0; } catch {}
      try { cell += (matrix[i - 1][j] === true) ? 1 : 0; } catch {}
      try { cell += (matrix[i - 1][j - 1] === true) ? 1 : 0; } catch {}
      try { cell += (matrix[i][j - 1] === true) ? 1 : 0; } catch {}
      try { cell += (matrix[i + 1][j - 1] === true) ? 1 : 0; } catch {}
      result[i][j] = cell;
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
