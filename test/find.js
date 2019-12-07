'use strict'

const test = require('ava');
const stringops = require('../index');

test('count: it should return a count of 2', t => {

  const count = stringops.count('The Prince of Winterfell', 'in');

  t.is(count, 2);

});

test('countChars: it should return an object detailing the number of times each character occured in the string', t => {

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

  t.deepEqual(chars, expected);

});

test('nthIndexOf: it should return the 47 which is the 3rd occurance of the word hello', t => {

  const index = stringops.nthIndexOf('one two there hello four five hello six seven hello eight nine ten hello', 'hello', 3);

  t.is(index, 47);

});

test('levenshtein: it should return the distance between Saturday and Sunday which is 3', t => {

  const lev = stringops.levenshtein('Saturday', 'Sunday');

  t.is(lev, 3);

});

test('isAlnum: it should return true indicating that the string was alphanumeric', t => {

  const isAlnum = stringops.isAlnum('HelloWorld1');

  t.is(isAlnum, true);

});

test('isAlnum: it should return false indicating that the string was not alphanumeric', t => {

  const isAlnum = stringops.isAlnum('HelloWorld1#');

  t.is(isAlnum, false);

});

test('isAlpha: it should return true indicating that the string has only letters', t => {

  const isAlpha = stringops.isAlpha('HelloWorld');

  t.is(isAlpha, true);

});

test('isAlpha: it should return false indicating that the string more than just letters', t => {

  const isAlpha = stringops.isAlpha('HelloWorld1');

  t.is(isAlpha, false);

});
