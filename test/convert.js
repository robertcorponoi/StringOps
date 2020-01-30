'use strict'

const test = require('ava');
const stringops = require('../index');

test(`bin2Hex: should convert the binary string '1100110111101010110111' to '337AB7'`, t => {
  const hex = stringops.bin2Hex('1100110111101010110111');

  t.is(hex, '337AB7');
});

test(`hex2Bin: should conver the hexadecimal string '337AB7' to '1100110111101010110111'`, t => {
  const bin = stringops.hex2Bin('337AB7');

  t.is(bin, '1100110111101010110111');
});