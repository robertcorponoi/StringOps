'use strict';
/**
 * Capitalize the first letter of the first word.
 *
 * @version 0.1.0
 *
 * @param {string} str The string to capitalize.
 *
 * @returns {string} Returns the modified string.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ucword = ucword;
exports.ucwords = ucwords;
exports.lcword = lcword;
exports.lcwords = lcwords;
exports.wordwrap = wordwrap;
exports.reverse = reverse;
exports.ltrim = ltrim;
exports.rtrim = rtrim;
exports.money = money;
exports.pad = pad;

function ucword(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
/**
 * Capitalizes the first letter of every word.
 *
 * @version 0.1.0
 *
 * @param {string} str The string to capitalize.
 *
 * @returns {string} Returns the capitalized string.
 */


function ucwords(str) {
  var split = str.split(' ');
  split.forEach(function (o, i, a) {
    return a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
  });
  return split.join(' ');
}
/**
 * Make the first letter of the first word lowercase.
 *
 * @version 0.1.0
 *
 * @param {string} str The string to modify.
 *
 * @returns {string} Returns the modified string.
 */


function lcword(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}
/**
 * Make the first letters of each word lowercase.
 *
 * @version 0.1.0
 *
 * @param {string} str The string to modify.
 *
 * @returns {string} Returns the modified string.
 */


function lcwords(str) {
  var split = str.split(' ');
  split.forEach(function (o, i, a) {
    return a[i] = a[i].charAt(0).toLowerCase() + a[i].slice(1);
  });
  return split.join(' ');
}
/**
 * Wraps a string to a given number of characters.
 *
 * @version 0.1.0
 *
 * @param {string} str The string to wrap.
 *
 * @returns {string} Returns the wrapped string.
 */


function wordwrap(str, charNumber) {
  return "".concat(str.slice(0, charNumber + 1), "\n").concat(str.slice(charNumber + 1));
}
/**
 * Reverses a string.
 *
 * @version 0.1.0
 *
 * @param {string} str The string to reverse.
 *
 * @returns {string} Returns the reversed string.
 */


function reverse(str) {
  var reversed = '';

  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}
/**
 * Trim all whitespace from the beginning of a string.
 *
 * @version 0.1.0
 *
 * @param {string} str The string to remove whitespace from.
 *
 * @returns {string} Returns the string without whitespace at the beginning.
 */


function ltrim(str) {
  while (str.charAt(0) == ' ') {
    str = str.slice(1);
  }

  return str;
}
/**
 * Trim all whitespace from the end of a string.
 *
 * @version 0.1.0
 *
 * @param {string} str The string to remove whitespace from.
 *
 * @returns {string} Returns the string without whitespace at the end.
 */


function rtrim(str) {
  while (str.charAt(str.length - 1) == ' ') {
    str = str.slice(0, -1);
  }

  return str;
}
/**
 * Formats a string into a representation of a type of currency.
 *
 * Currently only US/GB is supported is supported but more will be added with later
 * updates.
 *
 * @version 0.1.0
 *
 * @param {string|number} amount The string or number that represents the money amount.
 * @param {string} [locale='US'] The locale to use to format the currency.
 *
 * @returns {string} Returns the amount in a string representing that locale's currency.
 */


function money(amount) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'US';
  var str = amount.toString();
  var index = str.length;

  switch (locale) {
    case 'US':
      var coins = str.indexOf('.');
      if (coins > 0) index = coins;

      for (var i = index - 3; i > 0; i -= 3) {
        str = "".concat(str.slice(0, i), ",").concat(str.slice(i));
      }

      break;
  }

  return "$".concat(str);
}
/**
 * Pads a string with a substring on one or both sides.
 *
 * @version 0.1.0
 *
 * @param {string} str The string to pad.
 * @param {string} sub The substring to pad the string with.
 * @param {number} [amount=1] The amount of times to pad the string with the substring.
 * @param {string} [side='right'] The side of the string to pad. The available options are left, right, or both. 
 *                                If both is selected then the string will be padded evenly on both sides with the right
 *                                being favored if the amount is not even.
 *
 * @returns {string} Returns the padded string.
 */


function pad(str, sub) {
  var amount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var side = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'right';
  var padded = '';

  switch (side) {
    case 'left':
      padded = "".concat(sub.repeat(amount)).concat(str);
      break;

    case 'right':
      padded = "".concat(str).concat(sub.repeat(amount));
      break;

    case 'both':
      var padLeft = 0;
      var padRight = 0;

      if (amount % 2 === 0) {
        padLeft = amount / 2;
        padRight = amount / 2;
      } else {
        padRight = Math.round(amount / 2);
        padLeft = amount - padRight;
      }

      padded = "".concat(sub.repeat(padLeft)).concat(str).concat(sub.repeat(padRight));
      break;
  }

  return padded;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mb3JtYXQudHMiXSwibmFtZXMiOlsidWN3b3JkIiwic3RyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInVjd29yZHMiLCJzcGxpdCIsImZvckVhY2giLCJvIiwiaSIsImEiLCJqb2luIiwibGN3b3JkIiwidG9Mb3dlckNhc2UiLCJsY3dvcmRzIiwid29yZHdyYXAiLCJjaGFyTnVtYmVyIiwicmV2ZXJzZSIsInJldmVyc2VkIiwibGVuZ3RoIiwibHRyaW0iLCJydHJpbSIsIm1vbmV5IiwiYW1vdW50IiwibG9jYWxlIiwidG9TdHJpbmciLCJpbmRleCIsImNvaW5zIiwiaW5kZXhPZiIsInBhZCIsInN1YiIsInNpZGUiLCJwYWRkZWQiLCJyZXBlYXQiLCJwYWRMZWZ0IiwicGFkUmlnaHQiLCJNYXRoIiwicm91bmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNPLFNBQVNBLE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQXFDO0FBRTFDLFNBQU9BLEdBQUcsQ0FBQ0MsTUFBSixDQUFXLENBQVgsRUFBY0MsV0FBZCxLQUE4QkYsR0FBRyxDQUFDRyxLQUFKLENBQVUsQ0FBVixDQUFyQztBQUVEO0FBRUQ7Ozs7Ozs7Ozs7O0FBU08sU0FBU0MsT0FBVCxDQUFpQkosR0FBakIsRUFBc0M7QUFFM0MsTUFBTUssS0FBSyxHQUFHTCxHQUFHLENBQUNLLEtBQUosQ0FBVSxHQUFWLENBQWQ7QUFFQUEsRUFBQUEsS0FBSyxDQUFDQyxPQUFOLENBQWMsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVA7QUFBQSxXQUFhQSxDQUFDLENBQUNELENBQUQsQ0FBRCxHQUFPQyxDQUFDLENBQUNELENBQUQsQ0FBRCxDQUFLUCxNQUFMLENBQVksQ0FBWixFQUFlQyxXQUFmLEtBQStCTyxDQUFDLENBQUNELENBQUQsQ0FBRCxDQUFLTCxLQUFMLENBQVcsQ0FBWCxDQUFuRDtBQUFBLEdBQWQ7QUFFQSxTQUFPRSxLQUFL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QTVCLFNBQWtDNkIsR0FBRyxDQUFDRyxNQUFKLENBQVdFLFFBQVgsQ0FBbEMsQ0FBTjtBQUVBO0FBNUJKOztBQWdDQSxTQUFPSCxNQUFQO0FBRUQiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuLyoqXG4gKiBDYXBpdGFsaXplIHRoZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIGZpcnN0IHdvcmQuXG4gKlxuICogQHZlcnNpb24gMC4xLjBcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gY2FwaXRhbGl6ZS5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBtb2RpZmllZCBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1Y3dvcmQoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG5cbn1cblxuLyoqXG4gKiBDYXBpdGFsaXplcyB0aGUgZmlyc3QgbGV0dGVyIG9mIGV2ZXJ5IHdvcmQuXG4gKlxuICogQHZlcnNpb24gMC4xLjBcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gY2FwaXRhbGl6ZS5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjYXBpdGFsaXplZCBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1Y3dvcmRzKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcblxuICBjb25zdCBzcGxpdCA9IHN0ci5zcGxpdCgnICcpO1xuXG4gIHNwbGl0LmZvckVhY2goKG8sIGksIGEpID0+IGFbaV0gPSBhW2ldLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgYVtpXS5zbGljZSgxKSk7XG5cbiAgcmV0dXJuIHNwbGl0LmpvaW4oJyAnKTtcblxufVxuXG4vKipcbiAqIE1ha2UgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgZmlyc3Qgd29yZCBsb3dlcmNhc2UuXG4gKlxuICogQHZlcnNpb24gMC4xLjBcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gbW9kaWZ5LlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIG1vZGlmaWVkIHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxjd29yZChzdHI6IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcblxufVxuXG4vKipcbiAqIE1ha2UgdGhlIGZpcnN0IGxldHRlcnMgb2YgZWFjaCB3b3JkIGxvd2VyY2FzZS5cbiAqXG4gKiBAdmVyc2lvbiAwLjEuMFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBtb2RpZnkuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgbW9kaWZpZWQgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbGN3b3JkcyhzdHI6IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgY29uc3Qgc3BsaXQgPSBzdHIuc3BsaXQoJyAnKTtcblxuICBzcGxpdC5mb3JFYWNoKChvLCBpLCBhKSA9PiBhW2ldID0gYVtpXS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIGFbaV0uc2xpY2UoMSkpO1xuXG4gIHJldHVybiBzcGxpdC5qb2luKCcgJyk7XG5cbn1cblxuLyoqXG4gKiBXcmFwcyBhIHN0cmluZyB0byBhIGdpdmVuIG51bWJlciBvZiBjaGFyYWN0ZXJzLlxuICpcbiAqIEB2ZXJzaW9uIDAuMS4wXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHdyYXAuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgd3JhcHBlZCBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3b3Jkd3JhcChzdHI6IHN0cmluZywgY2hhck51bWJlciA6IG51bWJlcik6IHN0cmluZyB7XG5cbiAgcmV0dXJuIGAke3N0ci5zbGljZSgwLCBjaGFyTnVtYmVyICsgMSl9XFxuJHtzdHIuc2xpY2UoY2hhck51bWJlciArIDEpfWA7XG5cbn1cblxuLyoqXG4gKiBSZXZlcnNlcyBhIHN0cmluZy5cbiAqXG4gKiBAdmVyc2lvbiAwLjEuMFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byByZXZlcnNlLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJldmVyc2VkIHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2Uoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gIGxldCByZXZlcnNlZDogc3RyaW5nID0gJyc7XG5cbiAgZm9yIChsZXQgaSA9IHN0ci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXG4gICAgcmV2ZXJzZWQgKz0gc3RyW2ldO1xuXG4gIH1cblxuICByZXR1cm4gcmV2ZXJzZWQ7XG5cbn1cblxuLyoqXG4gKiBUcmltIGFsbCB3aGl0ZXNwYWNlIGZyb20gdGhlIGJlZ2lubmluZyBvZiBhIHN0cmluZy5cbiAqXG4gKiBAdmVyc2lvbiAwLjEuMFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byByZW1vdmUgd2hpdGVzcGFjZSBmcm9tLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZyB3aXRob3V0IHdoaXRlc3BhY2UgYXQgdGhlIGJlZ2lubmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGx0cmltKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcblxuICB3aGlsZSAoc3RyLmNoYXJBdCgwKSA9PSAnICcpIHN0ciA9IHN0ci5zbGljZSgxKTtcblxuICByZXR1cm4gc3RyO1xuXG59XG5cbi8qKlxuICogVHJpbSBhbGwgd2hpdGVzcGFjZSBmcm9tIHRoZSBlbmQgb2YgYSBzdHJpbmcuXG4gKlxuICogQHZlcnNpb24gMC4xLjBcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gcmVtb3ZlIHdoaXRlc3BhY2UgZnJvbS5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcgd2l0aG91dCB3aGl0ZXNwYWNlIGF0IHRoZSBlbmQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBydHJpbShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgd2hpbGUgKHN0ci5jaGFyQXQoc3RyLmxlbmd0aCAtIDEpID09ICcgJykgc3RyID0gc3RyLnNsaWNlKDAsIC0xKTtcblxuICByZXR1cm4gc3RyO1xuXG59XG5cbi8qKlxuICogRm9ybWF0cyBhIHN0cmluZyBpbnRvIGEgcmVwcmVzZW50YXRpb24gb2YgYSB0eXBlIG9mIGN1cnJlbmN5LlxuICpcbiAqIEN1cnJlbnRseSBvbmx5IFVTL0dCIGlzIHN1cHBvcnRlZCBpcyBzdXBwb3J0ZWQgYnV0IG1vcmUgd2lsbCBiZSBhZGRlZCB3aXRoIGxhdGVyXG4gKiB1cGRhdGVzLlxuICpcbiAqIEB2ZXJzaW9uIDAuMS4wXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBhbW91bnQgVGhlIHN0cmluZyBvciBudW1iZXIgdGhhdCByZXByZXNlbnRzIHRoZSBtb25leSBhbW91bnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2xvY2FsZT0nVVMnXSBUaGUgbG9jYWxlIHRvIHVzZSB0byBmb3JtYXQgdGhlIGN1cnJlbmN5LlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGFtb3VudCBpbiBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhhdCBsb2NhbGUncyBjdXJyZW5jeS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vbmV5KGFtb3VudDogKHN0cmluZyB8IG51bWJlciksIGxvY2FsZTogc3RyaW5nID0gJ1VTJyk6IHN0cmluZyB7XG5cbiAgbGV0IHN0ciA9IGFtb3VudC50b1N0cmluZygpO1xuXG4gIGxldCBpbmRleCA9IHN0ci5sZW5ndGg7XG5cbiAgc3dpdGNoIChsb2NhbGUpIHtcblxuICAgIGNhc2UgJ1VTJzpcbiAgICAgIGNvbnN0IGNvaW5zID0gc3RyLmluZGV4T2YoJy4nKTtcblxuICAgICAgaWYgKGNvaW5zID4gMCkgaW5kZXggPSBjb2lucztcblxuICAgICAgZm9yIChsZXQgaSA9IGluZGV4IC0gMzsgaSA+IDA7IGkgLT0gMykge1xuXG4gICAgICAgIHN0ciA9IGAke3N0ci5zbGljZSgwLCBpKX0sJHtzdHIuc2xpY2UoaSl9YDtcblxuICAgICAgfVxuXG4gICAgICBicmVhaztcblxuICB9XG5cbiAgcmV0dXJuIGAkJHtzdHJ9YDtcblxufVxuXG4vKipcbiAqIFBhZHMgYSBzdHJpbmcgd2l0aCBhIHN1YnN0cmluZyBvbiBvbmUgb3IgYm90aCBzaWRlcy5cbiAqXG4gKiBAdmVyc2lvbiAwLjEuMFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBwYWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gc3ViIFRoZSBzdWJzdHJpbmcgdG8gcGFkIHRoZSBzdHJpbmcgd2l0aC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbYW1vdW50PTFdIFRoZSBhbW91bnQgb2YgdGltZXMgdG8gcGFkIHRoZSBzdHJpbmcgd2l0aCB0aGUgc3Vic3RyaW5nLlxuICogQHBhcmFtIHtzdHJpbmd9IFtzaWRlPSdyaWdodCddIFRoZSBzaWRlIG9mIHRoZSBzdHJpbmcgdG8gcGFkLiBUaGUgYXZhaWxhYmxlIG9wdGlvbnMgYXJlIGxlZnQsIHJpZ2h0LCBvciBib3RoLiBcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZiBib3RoIGlzIHNlbGVjdGVkIHRoZW4gdGhlIHN0cmluZyB3aWxsIGJlIHBhZGRlZCBldmVubHkgb24gYm90aCBzaWRlcyB3aXRoIHRoZSByaWdodFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlaW5nIGZhdm9yZWQgaWYgdGhlIGFtb3VudCBpcyBub3QgZXZlbi5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBwYWRkZWQgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFkKHN0cjogc3RyaW5nLCBzdWI6IHN0cmluZywgYW1vdW50OiBudW1iZXIgPSAxLCBzaWRlOiBzdHJpbmcgPSAncmlnaHQnKTogc3RyaW5nIHtcblxuICBsZXQgcGFkZGVkOiBzdHJpbmcgPSAnJztcblxuICBzd2l0Y2ggKHNpZGUpIHtcblxuICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgcGFkZGVkID0gYCR7c3ViLnJlcGVhdChhbW91bnQpfSR7c3RyfWA7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIHBhZGRlZCA9IGAke3N0cn0ke3N1Yi5yZXBlYXQoYW1vdW50KX1gO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdib3RoJzpcbiAgICAgIGxldCBwYWRMZWZ0OiBudW1iZXIgPSAwO1xuICAgICAgbGV0IHBhZFJpZ2h0OiBudW1iZXIgPSAwO1xuXG4gICAgICBpZiAoYW1vdW50ICUgMiA9PT0gMCkge1xuXG4gICAgICAgIHBhZExlZnQgPSBhbW91bnQgLyAyO1xuICAgICAgICBwYWRSaWdodCA9IGFtb3VudCAvIDI7XG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgcGFkUmlnaHQgPSBNYXRoLnJvdW5kKGFtb3VudCAvIDIpXG4gICAgICAgIHBhZExlZnQgPSBhbW91bnQgLSBwYWRSaWdodDtcblxuICAgICAgfVxuXG4gICAgICBwYWRkZWQgPSBgJHtzdWIucmVwZWF0KHBhZExlZnQpfSR7c3RyfSR7c3ViLnJlcGVhdChwYWRSaWdodCl9YDtcblxuICAgICAgYnJlYWs7XG5cbiAgfVxuXG4gIHJldHVybiBwYWRkZWQ7XG5cbn1cbiJdfQ==