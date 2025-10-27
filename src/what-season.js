const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // Remove line below and write your code here
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!');
  }
  const month = date.getMonth();
  return [11, 0, 1].includes(month) ? 'winter' :
         [2, 3, 4].includes(month) ? 'spring' :
         [5, 6, 7].includes(month) ? 'summer' :
         [8, 9, 10].includes(month) ? 'autumn' :
         'Invalid date!';
}

module.exports = {
  getSeason
};
