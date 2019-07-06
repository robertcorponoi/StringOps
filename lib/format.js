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
exports.nl2br = nl2br;

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
 * @param {string} [side='right'] The side of the string to pad. The available options are left, right, or both. If both is selected then the string will be padded evenly on both sides with the right being favored if the amount is not even.
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
/**
 * Inserts HTML line breaks before all newlines in a string.
 * 
 * @version 0.1.0
 * 
 * @param {string} str The string to format with line breaks.
 * 
 * @returns {string} Returns the formatted string.
 */


function nl2br(str) {
  return str.replace(/(\\r|\\n|\\r\\n|\\n\\r)/g, '<br />');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mb3JtYXQudHMiXSwibmFtZXMiOlsidWN3b3JkIiwic3RyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInVjd29yZHMiLCJzcGxpdCIsImZvckVhY2giLCJvIiwiaSIsImEiLCJqb2luIiwibGN3b3JkIiwidG9Mb3dlckNhc2UiLCJsY3dvcmRzIiwid29yZHdyYXAiLCJjaGFyTnVtYmVyIiwicmV2ZXJzZSIsInJldmVyc2VkIiwibGVuZ3RoIiwibHRyaW0iLCJydHJpbSIsIm1vbmV5IiwiYW1vdW50IiwibG9jYWxlIiwidG9TdHJpbmciLCJpbmRleCIsImNvaW5zIiwiaW5kZXhPZiIsInBhZCIsInN1YiIsInNpZGUiLCJwYWRkZWQiLCJyZXBlYXQiLCJwYWRMZWZ0IiwicGFkUmlnaHQiLCJNYXRoIiwicm91bmQiLCJubDJiciIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTTyxTQUFTQSxNQUFULENBQWdCQyxHQUFoQixFQUFxQztBQUUxQyxTQUFPQSxHQUFHLENBQUNDLE1BQUosQ0FBVyxDQUFYLEVBQWNDLFdBQWQsS0FBOEJGLEdBQUcsQ0FBQ0csS0FBSixDQUFVLENBQVYsQ0FBckM7QUFFRDtBQUVEOzs7Ozs7Ozs7OztBQVNPLFNBQVNDLE9BQVQsQ0FBaUJKLEdBQWpCLEVBQXNDO0FBRTNDLE1BQU1LLEtBQUssR0FBR0wsR0FBRyxDQUFDSyxLQUFKLENBQVUsR0FBVixDQUFkO0FBRUFBLEVBQUFBLEtBQUssQ0FBQ0MsT0FBTixDQUFjLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxDQUFQO0FBQUEsV0FBYUEsQ0FBQyxDQUFDRCxDQUFELENBQUQsR0FBT0MsQ0FBQyxDQUFDRCxDQUFELENBQUQsQ0FBS1AsTUFBTCxDQUFZLENBQVosRUFBZUMsV0FBZixLQUErQk8sQ0FBQyxDQUFDRCxDQUFELENBQUQsQ0FBS0wsS0FBTCxDQUFXLENBQVgsQ0FBbkQ7QUFBQSxH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WCxDQUFOLFNBQTRCakMsR0FBNUIsU0FBa0M2QixHQUFHLENBQUNHLE1BQUosQ0FBV0UsUUFBWCxDQUFsQyxDQUFOO0FBRUE7QUE1Qko7O0FBZ0NBLFNBQU9ILE1BQVA7QUFFRDtBQUVEOzs7Ozs7Ozs7OztBQVNPLFNBQVNNLEtBQVQsQ0FBZXJDLEdBQWYsRUFBb0M7QUFFekMsU0FBT0EsR0FBRyxDQUFDc0MsT0FBSixDQUFZLDBCQUFaLEVBQXdDLFFBQXhDLENBQVA7QUFFRCIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuLyoqXHJcbiAqIENhcGl0YWxpemUgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgZmlyc3Qgd29yZC5cclxuICpcclxuICogQHZlcnNpb24gMC4xLjBcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGNhcGl0YWxpemUuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIG1vZGlmaWVkIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1Y3dvcmQoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cclxuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIENhcGl0YWxpemVzIHRoZSBmaXJzdCBsZXR0ZXIgb2YgZXZlcnkgd29yZC5cclxuICpcclxuICogQHZlcnNpb24gMC4xLjBcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGNhcGl0YWxpemUuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNhcGl0YWxpemVkIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1Y3dvcmRzKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuXHJcbiAgY29uc3Qgc3BsaXQgPSBzdHIuc3BsaXQoJyAnKTtcclxuXHJcbiAgc3BsaXQuZm9yRWFjaCgobywgaSwgYSkgPT4gYVtpXSA9IGFbaV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBhW2ldLnNsaWNlKDEpKTtcclxuXHJcbiAgcmV0dXJuIHNwbGl0LmpvaW4oJyAnKTtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYWtlIHRoZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIGZpcnN0IHdvcmQgbG93ZXJjYXNlLlxyXG4gKlxyXG4gKiBAdmVyc2lvbiAwLjEuMFxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gbW9kaWZ5LlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBtb2RpZmllZCBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGN3b3JkKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuXHJcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYWtlIHRoZSBmaXJzdCBsZXR0ZXJzIG9mIGVhY2ggd29yZCBsb3dlcmNhc2UuXHJcbiAqXHJcbiAqIEB2ZXJzaW9uIDAuMS4wXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBtb2RpZnkuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIG1vZGlmaWVkIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsY3dvcmRzKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuXHJcbiAgY29uc3Qgc3BsaXQgPSBzdHIuc3BsaXQoJyAnKTtcclxuXHJcbiAgc3BsaXQuZm9yRWFjaCgobywgaSwgYSkgPT4gYVtpXSA9IGFbaV0uY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBhW2ldLnNsaWNlKDEpKTtcclxuXHJcbiAgcmV0dXJuIHNwbGl0LmpvaW4oJyAnKTtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBXcmFwcyBhIHN0cmluZyB0byBhIGdpdmVuIG51bWJlciBvZiBjaGFyYWN0ZXJzLlxyXG4gKlxyXG4gKiBAdmVyc2lvbiAwLjEuMFxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gd3JhcC5cclxuICpcclxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgd3JhcHBlZCBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd29yZHdyYXAoc3RyOiBzdHJpbmcsIGNoYXJOdW1iZXIgOiBudW1iZXIpOiBzdHJpbmcge1xyXG5cclxuICByZXR1cm4gYCR7c3RyLnNsaWNlKDAsIGNoYXJOdW1iZXIgKyAxKX1cXG4ke3N0ci5zbGljZShjaGFyTnVtYmVyICsgMSl9YDtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXZlcnNlcyBhIHN0cmluZy5cclxuICpcclxuICogQHZlcnNpb24gMC4xLjBcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHJldmVyc2UuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJldmVyc2VkIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuXHJcbiAgbGV0IHJldmVyc2VkOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgZm9yIChsZXQgaSA9IHN0ci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG5cclxuICAgIHJldmVyc2VkICs9IHN0cltpXTtcclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmV2ZXJzZWQ7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogVHJpbSBhbGwgd2hpdGVzcGFjZSBmcm9tIHRoZSBiZWdpbm5pbmcgb2YgYSBzdHJpbmcuXHJcbiAqXHJcbiAqIEB2ZXJzaW9uIDAuMS4wXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byByZW1vdmUgd2hpdGVzcGFjZSBmcm9tLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcgd2l0aG91dCB3aGl0ZXNwYWNlIGF0IHRoZSBiZWdpbm5pbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbHRyaW0oc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cclxuICB3aGlsZSAoc3RyLmNoYXJBdCgwKSA9PSAnICcpIHN0ciA9IHN0ci5zbGljZSgxKTtcclxuXHJcbiAgcmV0dXJuIHN0cjtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcmltIGFsbCB3aGl0ZXNwYWNlIGZyb20gdGhlIGVuZCBvZiBhIHN0cmluZy5cclxuICpcclxuICogQHZlcnNpb24gMC4xLjBcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHJlbW92ZSB3aGl0ZXNwYWNlIGZyb20uXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZyB3aXRob3V0IHdoaXRlc3BhY2UgYXQgdGhlIGVuZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBydHJpbShzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcblxyXG4gIHdoaWxlIChzdHIuY2hhckF0KHN0ci5sZW5ndGggLSAxKSA9PSAnICcpIHN0ciA9IHN0ci5zbGljZSgwLCAtMSk7XHJcblxyXG4gIHJldHVybiBzdHI7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogRm9ybWF0cyBhIHN0cmluZyBpbnRvIGEgcmVwcmVzZW50YXRpb24gb2YgYSB0eXBlIG9mIGN1cnJlbmN5LlxyXG4gKlxyXG4gKiBDdXJyZW50bHkgb25seSBVUy9HQiBpcyBzdXBwb3J0ZWQgaXMgc3VwcG9ydGVkIGJ1dCBtb3JlIHdpbGwgYmUgYWRkZWQgd2l0aCBsYXRlclxyXG4gKiB1cGRhdGVzLlxyXG4gKlxyXG4gKiBAdmVyc2lvbiAwLjEuMFxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGFtb3VudCBUaGUgc3RyaW5nIG9yIG51bWJlciB0aGF0IHJlcHJlc2VudHMgdGhlIG1vbmV5IGFtb3VudC5cclxuICogQHBhcmFtIHtzdHJpbmd9IFtsb2NhbGU9J1VTJ10gVGhlIGxvY2FsZSB0byB1c2UgdG8gZm9ybWF0IHRoZSBjdXJyZW5jeS5cclxuICpcclxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYW1vdW50IGluIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGF0IGxvY2FsZSdzIGN1cnJlbmN5LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1vbmV5KGFtb3VudDogKHN0cmluZyB8IG51bWJlciksIGxvY2FsZTogc3RyaW5nID0gJ1VTJyk6IHN0cmluZyB7XHJcblxyXG4gIGxldCBzdHIgPSBhbW91bnQudG9TdHJpbmcoKTtcclxuXHJcbiAgbGV0IGluZGV4ID0gc3RyLmxlbmd0aDtcclxuXHJcbiAgc3dpdGNoIChsb2NhbGUpIHtcclxuXHJcbiAgICBjYXNlICdVUyc6XHJcbiAgICAgIGNvbnN0IGNvaW5zID0gc3RyLmluZGV4T2YoJy4nKTtcclxuXHJcbiAgICAgIGlmIChjb2lucyA+IDApIGluZGV4ID0gY29pbnM7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gaW5kZXggLSAzOyBpID4gMDsgaSAtPSAzKSB7XHJcblxyXG4gICAgICAgIHN0ciA9IGAke3N0ci5zbGljZSgwLCBpKX0sJHtzdHIuc2xpY2UoaSl9YDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiBgJCR7c3RyfWA7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogUGFkcyBhIHN0cmluZyB3aXRoIGEgc3Vic3RyaW5nIG9uIG9uZSBvciBib3RoIHNpZGVzLlxyXG4gKlxyXG4gKiBAdmVyc2lvbiAwLjEuMFxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gcGFkLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3ViIFRoZSBzdWJzdHJpbmcgdG8gcGFkIHRoZSBzdHJpbmcgd2l0aC5cclxuICogQHBhcmFtIHtudW1iZXJ9IFthbW91bnQ9MV0gVGhlIGFtb3VudCBvZiB0aW1lcyB0byBwYWQgdGhlIHN0cmluZyB3aXRoIHRoZSBzdWJzdHJpbmcuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc2lkZT0ncmlnaHQnXSBUaGUgc2lkZSBvZiB0aGUgc3RyaW5nIHRvIHBhZC4gVGhlIGF2YWlsYWJsZSBvcHRpb25zIGFyZSBsZWZ0LCByaWdodCwgb3IgYm90aC4gSWYgYm90aCBpcyBzZWxlY3RlZCB0aGVuIHRoZSBzdHJpbmcgd2lsbCBiZSBwYWRkZWQgZXZlbmx5IG9uIGJvdGggc2lkZXMgd2l0aCB0aGUgcmlnaHQgYmVpbmcgZmF2b3JlZCBpZiB0aGUgYW1vdW50IGlzIG5vdCBldmVuLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBwYWRkZWQgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhZChzdHI6IHN0cmluZywgc3ViOiBzdHJpbmcsIGFtb3VudDogbnVtYmVyID0gMSwgc2lkZTogc3RyaW5nID0gJ3JpZ2h0Jyk6IHN0cmluZyB7XHJcblxyXG4gIGxldCBwYWRkZWQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICBzd2l0Y2ggKHNpZGUpIHtcclxuXHJcbiAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgcGFkZGVkID0gYCR7c3ViLnJlcGVhdChhbW91bnQpfSR7c3RyfWA7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgcGFkZGVkID0gYCR7c3RyfSR7c3ViLnJlcGVhdChhbW91bnQpfWA7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgJ2JvdGgnOlxyXG4gICAgICBsZXQgcGFkTGVmdDogbnVtYmVyID0gMDtcclxuICAgICAgbGV0IHBhZFJpZ2h0OiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgaWYgKGFtb3VudCAlIDIgPT09IDApIHtcclxuXHJcbiAgICAgICAgcGFkTGVmdCA9IGFtb3VudCAvIDI7XHJcbiAgICAgICAgcGFkUmlnaHQgPSBhbW91bnQgLyAyO1xyXG5cclxuICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgcGFkUmlnaHQgPSBNYXRoLnJvdW5kKGFtb3VudCAvIDIpXHJcbiAgICAgICAgcGFkTGVmdCA9IGFtb3VudCAtIHBhZFJpZ2h0O1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgcGFkZGVkID0gYCR7c3ViLnJlcGVhdChwYWRMZWZ0KX0ke3N0cn0ke3N1Yi5yZXBlYXQocGFkUmlnaHQpfWA7XHJcblxyXG4gICAgICBicmVhaztcclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGFkZGVkO1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEluc2VydHMgSFRNTCBsaW5lIGJyZWFrcyBiZWZvcmUgYWxsIG5ld2xpbmVzIGluIGEgc3RyaW5nLlxyXG4gKiBcclxuICogQHZlcnNpb24gMC4xLjBcclxuICogXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBmb3JtYXQgd2l0aCBsaW5lIGJyZWFrcy5cclxuICogXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGZvcm1hdHRlZCBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbmwyYnIoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cclxuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhcXFxccnxcXFxcbnxcXFxcclxcXFxufFxcXFxuXFxcXHIpL2csICc8YnIgLz4nKTtcclxuXHJcbn1cclxuIl19