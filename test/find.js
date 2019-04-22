'use strict'

const chai = require('chai');

const stringops = require('../index');

describe('Finding things in strings', () => {

  it('count: it should return a count of 2', () => {

    const count = stringops.count('The Prince of Winterfell', 'in');

    chai.expect(count).to.equal(2);

  });

  it('countChars: it should return an object detailing the number of times each character occured in the string', () => {

    const chars = stringops.countChars("Hello there world! Let's see how many times each character has appeared in this sentence.");

    const expected = {
      'H': 1,
      'e': 14,
      'l': 3,
      'o': 3,
      ' ': 14,
      't': 6,
      'h': 6,
      'r': 5,
      'w': 2,
      'd': 2,
      '!': 1,
      'L': 1,
      "'": 1,
      's': 6,
      'm': 2,
      'a': 7,
      'n': 4,
      'y': 1,
      'i': 3,
      'c': 4,
      'p': 2,
      '.': 1,
    };

    chai.expect(chars).to.deep.equal(expected);

  });

  it('nthIndexOf: it should return the 47 which is the 3rd occurance of the word hello', () => {

    const index = stringops.nthIndexOf('one two there hello four five hello six seven hello eight nine ten hello', 'hello', 3);

    chai.expect(index).to.equal(47);

  });

  it('levenshtein: it should return the distance between Saturday and Sunday which is 3', () => {

    const lev = stringops.levenshtein('Saturday', 'Sunday');

    chai.expect(lev).to.equal(3);

  });

});
