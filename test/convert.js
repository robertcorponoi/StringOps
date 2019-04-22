'use strict'

const chai = require('chai');

const stringops = require('../index');

describe('Converting strings between different formats', () => {

  it(`bin2Hex: should convert the binary string '1100110111101010110111' to '337AB7'`, () => {

    const hex = stringops.bin2Hex('1100110111101010110111');

    chai.expect(hex).to.equal('337AB7');

  });

  it(`hex2Bin: should conver the hexadecimal string '337AB7' to '1100110111101010110111'`, () => {

    const bin = stringops.hex2Bin('337AB7');

    chai.expect(bin).to.equal('1100110111101010110111'); 

  });

});
