'use strict'

const test = require('ava');
const stringops = require('../index');

test(`ucword: should take the string 'hello there world!' and return 'Hello there world!'`, t => {

  const result = stringops.ucword('hello there world!');

  t.is(result, 'Hello there world!');

});

test(`ucwords: should take the string 'hello there world!' and return 'Hello There World!'`, t => {

  const result = stringops.ucwords('hello there world!');

  t.is(result, 'Hello There World!');

});

test(`lcword: should take the string 'Hello There World!' and return 'hello There World!'`, t => {

  const result = stringops.lcword('Hello There World!');

  t.is(result, 'hello There World!');

});

test(`lcwords: should take the string 'Hello There World!' and return 'hello there world!'`, t => {

  const result = stringops.lcwords('Hello There World!');

  t.is(result, 'hello there world!');

});

test(`wordwrap: should take the string 'Hello there world!' and return 'Hello there\nworld!`, t => {

  const result = stringops.wordwrap('Hello there world!', 11);

  t.is(result.indexOf('\n'), 12);

});

test(`reverse: should take the string 'Hello World!' and return '!dlroW olleH'`, t => {

  const reversed = stringops.reverse('Hello World!');

  t.is(reversed, '!dlroW olleH');

});

test(`ltrim: should remove all whitespace from the front of the string`, t => {

  const trimmed = stringops.ltrim('   Hello World!');

  t.is(trimmed, 'Hello World!');

});

test(`rtrim: should remove all whitespace from the end of the string`, t => {

  const trimmed = stringops.rtrim('Hello World!   ');

  t.is(trimmed, 'Hello World!');

});

test(`money: should convert the string '12345.67' to '$12,345.67'`, t => {

  const money = stringops.money('12345.67');

  t.is(money, '$12,345.67');

});

test(`money: should convert the number '1234567' to '$1,234,567'`, t => {

  const money = stringops.money(1234567);

  t.is(money, '$1,234,567');

});

test(`pad: should pad the left side of the string`, t => {

  const pad = stringops.pad('Hello World!', '=-', 3, 'left');

  t.is(pad, '=-=-=-Hello World!');

});

test(`pad: should pad the right side of the string`, t => {

  const pad = stringops.pad('Hello World!', 'a*b', 5);

  t.is(pad, 'Hello World!a*ba*ba*ba*ba*b');

});

test(`pad: should pad the both sides of the string an even amount`, t => {

  const pad = stringops.pad('Hello World!', '=-', 4, 'both');

  t.is(pad, '=-=-Hello World!=-=-');

});

test(`pad: should pad the both sides of the string an uneven amount`, t => {

  const pad = stringops.pad('Hello World!', '=-', 5, 'both');

  t.is(pad, '=-=-Hello World!=-=-=-');

});