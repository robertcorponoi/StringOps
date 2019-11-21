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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb252ZXJ0LnRzIl0sIm5hbWVzIjpbImJpbjJIZXgiLCJiaW4iLCJwYXJzZUludCIsInRvU3RyaW5nIiwidG9VcHBlckNhc2UiLCJoZXgyQmluIiwiaGV4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFPLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNDO0FBRTNDLFNBQU9DLFFBQVEsQ0FBQ0QsR0FBRCxFQUFNLENBQU4sQ0FBUixDQUFpQkUsUUFBakIsQ0FBMEIsRUFBMUIsRUFBOEJDLFdBQTlCLEVBQVA7QUFFRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7QUFhTyxTQUFTQyxPQUFULENBQWlCQyxHQUFqQixFQUFzQztBQUUzQyxTQUFPSixRQUFRLENBQUNJLEdBQUQsRUFBTSxFQUFOLENBQVIsQ0FBa0JILFFBQWxCLENBQTJCLENBQTNCLENBQVA7QUFFRCIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGEgYmluYXJ5IHN0cmluZyB0byBoZXhhZGVjaW1hbC5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGJpbiBUaGUgYmluYXJ5IHN0cmluZyB0byBjb252ZXJ0IHRvIGhleGFkZWNpbWFsLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBoZXhhZGVjaW1hbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgYmluYXJ5IHN0cmluZy5cclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogY29uc3QgaGV4ID0gc3RyaW5nb3BzLmJpbjJIZXgoJzExMDAxMTAxMTExMDEwMTAxMTAxMTEnKTtcclxuICpcclxuICogY29uc29sZS5sb2coaGV4KTsgLy8gJzMzN0FCNydcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBiaW4ySGV4KGJpbjogc3RyaW5nKTogc3RyaW5nIHtcclxuXHJcbiAgcmV0dXJuIHBhcnNlSW50KGJpbiwgMikudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgYSBoZXhhZGVjaW1hbCB0byBhIGJpbmFyeSBzdHJpbmcuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBoZXggVGhlIGhleGFkZW1pY2FsIHZhbHVlIHRvIGNvbnZlcnQgdG8gYmluYXJ5LlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBiaW5hcnkgcmVwcmVzZW50YXRpb24gb2YgdGhlIGhleGFkZWNpbWFsIHZhbHVlLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBjb25zdCBiaW4gPSBzdHJpbmdvcHMuaGV4MkJpbignMzM3YWI3Jyk7XHJcbiAqXHJcbiAqIGNvbnNvbGUubG9nKGJpbik7IC8vICcxMTAwMTEwMTExMTAxMDEwMTEwMTExJ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhleDJCaW4oaGV4OiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cclxuICByZXR1cm4gcGFyc2VJbnQoaGV4LCAxNikudG9TdHJpbmcoMik7XHJcblxyXG59XHJcbiJdfQ==