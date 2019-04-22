'use strict';
/**
 * Converts a binary string to hexadecimal.
 *
 * @version 0.1.0
 *
 * @param {string} bin The binary string to convert to hexadecimal.
 *
 * @returns {string} Returns the hexadecimal representation of the binary string.
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
 * @version 0.1.0
 *
 * @param {string} hex The hexademical value to convert to binary.
 *
 * @returns {string} Returns the binary representation of the hexadecimal value.
 */


function hex2Bin(hex) {
  return parseInt(hex, 16).toString(2);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb252ZXJ0LnRzIl0sIm5hbWVzIjpbImJpbjJIZXgiLCJiaW4iLCJwYXJzZUludCIsInRvU3RyaW5nIiwidG9VcHBlckNhc2UiLCJoZXgyQmluIiwiaGV4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBU08sU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0M7QUFFM0MsU0FBT0MsUUFBUSxDQUFDRCxHQUFELEVBQU0sQ0FBTixDQUFSLENBQWlCRSxRQUFqQixDQUEwQixFQUExQixFQUE4QkMsV0FBOUIsRUFBUDtBQUVEO0FBRUQ7Ozs7Ozs7Ozs7O0FBU08sU0FBU0MsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0M7QUFFM0MsU0FBT0osUUFBUSxDQUFDSSxHQUFELEVBQU0sRUFBTixDQUFSLENBQWtCSCxRQUFsQixDQUEyQixDQUEzQixDQUFQO0FBRUQiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuLyoqXG4gKiBDb252ZXJ0cyBhIGJpbmFyeSBzdHJpbmcgdG8gaGV4YWRlY2ltYWwuXG4gKlxuICogQHZlcnNpb24gMC4xLjBcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmluIFRoZSBiaW5hcnkgc3RyaW5nIHRvIGNvbnZlcnQgdG8gaGV4YWRlY2ltYWwuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgaGV4YWRlY2ltYWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGJpbmFyeSBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW4ySGV4KGJpbjogc3RyaW5nKTogc3RyaW5nIHtcblxuICByZXR1cm4gcGFyc2VJbnQoYmluLCAyKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblxufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgaGV4YWRlY2ltYWwgdG8gYSBiaW5hcnkgc3RyaW5nLlxuICpcbiAqIEB2ZXJzaW9uIDAuMS4wXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGhleCBUaGUgaGV4YWRlbWljYWwgdmFsdWUgdG8gY29udmVydCB0byBiaW5hcnkuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYmluYXJ5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBoZXhhZGVjaW1hbCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhleDJCaW4oaGV4OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gIHJldHVybiBwYXJzZUludChoZXgsIDE2KS50b1N0cmluZygyKTtcblxufVxuIl19