'use strict';
/**
 * Converts a binary string to hexadecimal.
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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bin2Hex = bin2Hex;
exports.hex2Bin = hex2Bin;

function bin2Hex(bin) {
  return parseInt(bin, 2).toString(16).toUpperCase();
}
/**
 * Converts a hexadecimal to a binary string.
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


function hex2Bin(hex) {
  return parseInt(hex, 16).toString(2);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb252ZXJ0LnRzIl0sIm5hbWVzIjpbImJpbjJIZXgiLCJiaW4iLCJwYXJzZUludCIsInRvU3RyaW5nIiwidG9VcHBlckNhc2UiLCJoZXgyQmluIiwiaGV4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFPLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNDO0FBQzNDLFNBQU9DLFFBQVEsQ0FBQ0QsR0FBRCxFQUFNLENBQU4sQ0FBUixDQUFpQkUsUUFBakIsQ0FBMEIsRUFBMUIsRUFBOEJDLFdBQTlCLEVBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7QUFhTyxTQUFTQyxPQUFULENBQWlCQyxHQUFqQixFQUFzQztBQUMzQyxTQUFPSixRQUFRLENBQUNJLEdBQUQsRUFBTSxFQUFOLENBQVIsQ0FBa0JILFFBQWxCLENBQTJCLENBQTNCLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGEgYmluYXJ5IHN0cmluZyB0byBoZXhhZGVjaW1hbC5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGJpbiBUaGUgYmluYXJ5IHN0cmluZyB0byBjb252ZXJ0IHRvIGhleGFkZWNpbWFsLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBoZXhhZGVjaW1hbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgYmluYXJ5IHN0cmluZy5cclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogY29uc3QgaGV4ID0gc3RyaW5nb3BzLmJpbjJIZXgoJzExMDAxMTAxMTExMDEwMTAxMTAxMTEnKTtcclxuICpcclxuICogY29uc29sZS5sb2coaGV4KTsgLy8gJzMzN0FCNydcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBiaW4ySGV4KGJpbjogc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4gcGFyc2VJbnQoYmluLCAyKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGEgaGV4YWRlY2ltYWwgdG8gYSBiaW5hcnkgc3RyaW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaGV4IFRoZSBoZXhhZGVtaWNhbCB2YWx1ZSB0byBjb252ZXJ0IHRvIGJpbmFyeS5cclxuICpcclxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYmluYXJ5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBoZXhhZGVjaW1hbCB2YWx1ZS5cclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogY29uc3QgYmluID0gc3RyaW5nb3BzLmhleDJCaW4oJzMzN2FiNycpO1xyXG4gKlxyXG4gKiBjb25zb2xlLmxvZyhiaW4pOyAvLyAnMTEwMDExMDExMTEwMTAxMDExMDExMSdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoZXgyQmluKGhleDogc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4gcGFyc2VJbnQoaGV4LCAxNikudG9TdHJpbmcoMik7XHJcbn1cclxuIl19