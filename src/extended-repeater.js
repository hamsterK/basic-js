const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  // Remove line below and write your code here
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.hasOwnProperty('separator') ? String(options.separator) : '+';
  let addition = options.hasOwnProperty('addition') ? String(options.addition) : '';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.hasOwnProperty('additionSeparator') && addition ? String(options.additionSeparator) : '|';

  const newStr = String(str) + Array(additionRepeatTimes).fill(addition).join(additionSeparator);

  return Array(repeatTimes).fill(newStr).join(separator);
}

module.exports = {
  repeater
};
