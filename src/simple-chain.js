const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  newChain: [],
  getLength() {
    // Remove line below and write your code here
    return this.newChain.length;
  },
  addLink(value) {
    // Remove line below and write your code here
    this.newChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    // Remove line below and write your code here
    if (position < 1 || position > this.newChain.length || !Number.isInteger(position)) {
      this.newChain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.newChain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    // Remove line below and write your code here
    this.newChain.reverse();
    return this;
  },
  finishChain() {
    const result = this.newChain.join('~~');
    this.newChain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
