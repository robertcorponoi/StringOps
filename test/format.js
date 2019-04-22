'use strict'

const chai = require('chai');

const stringops = require('../index');

describe('Transforming strings', () => {

  it(`ucword: should take the string 'hello there world!' and return 'Hello there world!'`, () => {

    const result = stringops.ucword('hello there world!');

    chai.expect(result).to.equal('Hello there world!');

  });

  it(`ucwords: should take the string 'hello there world!' and return 'Hello There World!'`, () => {

    const result = stringops.ucwords('hello there world!');

    chai.expect(result).to.equal('Hello There World!');

  });

  it(`lcword: should take the string 'Hello There World!' and return 'hello There World!'`, () => {

    const result = stringops.lcword('Hello There World!');

    chai.expect(result).to.equal('hello There World!');

  });

  it(`lcwords: should take the string 'Hello There World!' and return 'hello there world!'`, () => {

    const result = stringops.lcwords('Hello There World!');

    chai.expect(result).to.equal('hello there world!');

  });

  it(`wordwrap: should take the string 'Hello there world!' and return 'Hello there\nworld!`, () => {

    const result = stringops.wordwrap('Hello there world!', 11);

    chai.expect(result.indexOf('\n')).to.equal(12);

  });

  it(`reverse: should take the string 'Hello World!' and return '!dlroW olleH'`, () => {

    const reversed = stringops.reverse('Hello World!');

    chai.expect(reversed).to.equal('!dlroW olleH');

  });

  it(`ltrim: should remove all whitespace from the front of the string`, () => {

    const trimmed = stringops.ltrim('   Hello World!');

    chai.expect(trimmed).to.equal('Hello World!');

  });

  it(`rtrim: should remove all whitespace from the end of the string`, () => {

    const trimmed = stringops.rtrim('Hello World!   ');

    chai.expect(trimmed).to.equal('Hello World!');

  });

  it(`money: should convert the string '12345.67' to '$12,345.67'`, () => {

    const money = stringops.money('12345.67');

    chai.expect(money).to.equal('$12,345.67');

  });

  it(`money: should convert the number '1234567' to '$1,234,567'`, () => {

    const money = stringops.money(1234567);

    chai.expect(money).to.equal('$1,234,567');

  });

  it(`pad: should pad the left side of the string`, () => {

    const pad = stringops.pad('Hello World!', '=-', 3, 'left');

    chai.expect(pad).to.equal('=-=-=-Hello World!');

  });

  it(`pad: should pad the right side of the string`, () => {

    const pad = stringops.pad('Hello World!', 'a*b', 5);

    chai.expect(pad).to.equal('Hello World!a*ba*ba*ba*ba*b');

  });

  it(`pad: should pad the both sides of the string an even amount`, () => {

    const pad = stringops.pad('Hello World!', '=-', 4, 'both');

    chai.expect(pad).to.equal('=-=-Hello World!=-=-');

  });

  it(`pad: should pad the both sides of the string an uneven amount`, () => {

    const pad = stringops.pad('Hello World!', '=-', 5, 'both');

    chai.expect(pad).to.equal('=-=-Hello World!=-=-=-');

  });

});
