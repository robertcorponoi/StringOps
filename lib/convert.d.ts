/**
 * Converts a binary string to hexadecimal.
 *
 * @version 0.1.0
 *
 * @param {string} bin The binary string to convert to hexadecimal.
 *
 * @returns {string} Returns the hexadecimal representation of the binary string.
 *
 * @example
 *
 * const hex = stringops.bin2Hex('1100110111101010110111');
 *
 * console.log(hex); // '337AB7'
 */
export declare function bin2Hex(bin: string): string;
/**
 * Converts a hexadecimal to a binary string.
 *
 * @version 0.1.0
 *
 * @param {string} hex The hexademical value to convert to binary.
 *
 * @returns {string} Returns the binary representation of the hexadecimal value.
 *
 * @example
 *
 * const bin = stringops.hex2Bin('337ab7');
 *
 * console.log(bin); // '1100110111101010110111'
 */
export declare function hex2Bin(hex: string): string;
