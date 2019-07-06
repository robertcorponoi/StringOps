'use strict';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb252ZXJ0LnRzIl0sIm5hbWVzIjpbImJpbjJIZXgiLCJiaW4iLCJwYXJzZUludCIsInRvU3RyaW5nIiwidG9VcHBlckNhc2UiLCJoZXgyQmluIiwiaGV4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZU8sU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0M7QUFFM0MsU0FBT0MsUUFBUSxDQUFDRCxHQUFELEVBQU0sQ0FBTixDQUFSLENBQWlCRSxRQUFqQixDQUEwQixFQUExQixFQUE4QkMsV0FBOUIsRUFBUDtBQUVEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZU8sU0FBU0MsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0M7QUFFM0MsU0FBT0osUUFBUSxDQUFDSSxHQUFELEVBQU0sRUFBTixDQUFSLENBQWtCSCxRQUFsQixDQUEyQixDQUEzQixDQUFQO0FBRUQiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhIGJpbmFyeSBzdHJpbmcgdG8gaGV4YWRlY2ltYWwuXHJcbiAqXHJcbiAqIEB2ZXJzaW9uIDAuMS4wXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBiaW4gVGhlIGJpbmFyeSBzdHJpbmcgdG8gY29udmVydCB0byBoZXhhZGVjaW1hbC5cclxuICpcclxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgaGV4YWRlY2ltYWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGJpbmFyeSBzdHJpbmcuXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIGNvbnN0IGhleCA9IHN0cmluZ29wcy5iaW4ySGV4KCcxMTAwMTEwMTExMTAxMDEwMTEwMTExJyk7XHJcbiAqXHJcbiAqIGNvbnNvbGUubG9nKGhleCk7IC8vICczMzdBQjcnXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYmluMkhleChiaW46IHN0cmluZyk6IHN0cmluZyB7XHJcblxyXG4gIHJldHVybiBwYXJzZUludChiaW4sIDIpLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGEgaGV4YWRlY2ltYWwgdG8gYSBiaW5hcnkgc3RyaW5nLlxyXG4gKlxyXG4gKiBAdmVyc2lvbiAwLjEuMFxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaGV4IFRoZSBoZXhhZGVtaWNhbCB2YWx1ZSB0byBjb252ZXJ0IHRvIGJpbmFyeS5cclxuICpcclxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYmluYXJ5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBoZXhhZGVjaW1hbCB2YWx1ZS5cclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogY29uc3QgYmluID0gc3RyaW5nb3BzLmhleDJCaW4oJzMzN2FiNycpO1xyXG4gKlxyXG4gKiBjb25zb2xlLmxvZyhiaW4pOyAvLyAnMTEwMDExMDExMTEwMTAxMDExMDExMSdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoZXgyQmluKGhleDogc3RyaW5nKTogc3RyaW5nIHtcclxuXHJcbiAgcmV0dXJuIHBhcnNlSW50KGhleCwgMTYpLnRvU3RyaW5nKDIpO1xyXG5cclxufVxyXG4iXX0=