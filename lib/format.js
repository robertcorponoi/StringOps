'use strict';
/**
 * Capitalize the first letter of the first word.
 *
 * @param {string} str The string to capitalize.
 *
 * @returns {string} Returns the modified string.
 * 
 * @example
 * 
 * const text = 'hello';
 * 
 * const ucText = stringops.ucword(text); // 'Hello';
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
 * @param {string} str The string to capitalize.
 *
 * @returns {string} Returns the capitalized string.
 * 
 * @example
 * 
 * const text = 'hello world';
 * 
 * const ucWords = stringops.ucwords(text); // 'Hello World'
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
 * @param {string} str The string to modify.
 *
 * @returns {string} Returns the modified string.
 * 
 * const text = 'Hello';
 * 
 * const lcText = stringops.lcword(text); // 'hello'
 */


function lcword(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}
/**
 * Make the first letters of each word lowercase.
 *
 * @param {string} str The string to modify.
 *
 * @returns {string} Returns the modified string.
 * 
 * @example
 * 
 * const text = 'Hello World';
 * 
 * const lcWords = stringops.lcWords(text); // 'hello world'
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
 * @param {string} str The string to wrap.
 *
 * @returns {string} Returns the wrapped string.
 * 
 * @example
 * 
 * const text = 'Hello World';
 * 
 * const wrapped = stringops.wordwrap(text, 5); // 'Hello \n World'
 */


function wordwrap(str, charNumber) {
  return "".concat(str.slice(0, charNumber + 1), "\n").concat(str.slice(charNumber + 1));
}
/**
 * Reverses a string.
 *
 * @param {string} str The string to reverse.
 *
 * @returns {string} Returns the reversed string.
 * 
 * @example
 * 
 * const text = 'Hello World';
 * 
 * const reverse = stringops.reverse(text); // 'dlroW olleH'
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
 * @param {string} str The string to remove whitespace from.
 *
 * @returns {string} Returns the string without whitespace at the beginning.
 * 
 * @example
 * 
 * const text = '  Hello World';
 * 
 * const ltrim = stringops.ltrim(text); // 'Hello World'
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
 * @param {string} str The string to remove whitespace from.
 *
 * @returns {string} Returns the string without whitespace at the end.
 * 
 * @example
 * 
 * const text = 'Hello World  ';
 * 
 * const rtrim = stringops.rtrim(text); // 'Hello World'
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
 * Currently only US/GB is supported is supported but more will be added with later updates.
 *
 * @param {string|number} amount The string or number that represents the money amount.
 * @param {string} [locale='US'] The locale to use to format the currency.
 *
 * @returns {string} Returns the amount in a string representing that locale's currency.
 * 
 * @example
 * 
 * const money = 5;
 * 
 * const dollars = stringops.money(money); // '$5'
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
 * @param {string} str The string to pad.
 * @param {string} sub The substring to pad the string with.
 * @param {number} [amount=1] The amount of times to pad the string with the substring.
 * @param {string} [side='right'] The side of the string to pad. The available options are left, right, or both. If both is selected then the string will be padded evenly on both sides with the right being favored if the amount is not even.
 *
 * @returns {string} Returns the padded string.
 * 
 * @example
 * 
 * const text = 'Hello World';
 * 
 * const padded = stringops.pad(text, '!', 2, 'both'); // '!!Hello World!!'
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
 * @param {string} str The string to format with line breaks.
 * 
 * @returns {string} Returns the formatted string.
 * 
 * @example
 * 
 * const text = 'Hello \nWorld';
 * 
 * const breaks = stringops.nl2br(text); // 'Hello <br/>World'
 */


function nl2br(str) {
  return str.replace(/(\\r|\\n|\\r\\n|\\n\\r)/g, '<br />');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mb3JtYXQudHMiXSwibmFtZXMiOlsidWN3b3JkIiwic3RyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInVjd29yZHMiLCJzcGxpdCIsImZvckVhY2giLCJvIiwiaSIsImEiLCJqb2luIiwibGN3b3JkIiwidG9Mb3dlckNhc2UiLCJsY3dvcmRzIiwid29yZHdyYXAiLCJjaGFyTnVtYmVyIiwicmV2ZXJzZSIsInJldmVyc2VkIiwibGVuZ3RoIiwibHRyaW0iLCJydHJpbSIsIm1vbmV5IiwiYW1vdW50IiwibG9jYWxlIiwidG9TdHJpbmciLCJpbmRleCIsImNvaW5zIiwiaW5kZXhPZiIsInBhZCIsInN1YiIsInNpZGUiLCJwYWRkZWQiLCJyZXBlYXQiLCJwYWRMZWZ0IiwicGFkUmlnaHQiLCJNYXRoIiwicm91bmQiLCJubDJiciIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYU8sU0FBU0EsTUFBVCxDQUFnQkMsR0FBaEIsRUFBcUM7QUFFMUMsU0FBT0EsR0FBRyxDQUFDQyxNQUFKLENBQVcsQ0FBWCxFQUFjQyxXQUFkLEtBQThCRixHQUFHLENBQUNHLEtBQUosQ0FBVSxDQUFWLENBQXJDO0FBRUQ7QUFFRDs7Ozs7Ozs7Ozs7Ozs7O0FBYU8sU0FBU0MsT0FBVCxDQUFpQkosR0FBakIsRUFBc0M7QUFFM0MsTUFBTUssS0FBSyxHQUFHTCxHQUFHLENBQUNLLEtBQUosQ0FBVSxHQUFWLENBQWQ7QUFFQUEsRUFBQUEsS0FBSyxDQUFDQyxPQUFOLENBQWMsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVA7QUFBQSxXQUFhQSxDQUFDLENBQUNELENBQUQsQ0FBRCxHQUFPQyxDQUFDLENBQUNELENBQUQsQ0FBRCxDQUFLUCxNQUFMLENBQVksQ0FBWixFQUFlQyxXQUFmLEtBQStCTyxDQUFDLENBQUNELENBQUQsQ0FBRCxDQUFLTCxLQUFMLENBQVcsQ0FBWCxDQUFu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QUEsTUFBTSxhQUFNRixHQUFHLENBQUNHLE1BQUosQ0FBV0MsT0FBWCxDQUFOLFNBQTRCakMsR0FBNUIsU0FBa0M2QixHQUFHLENBQUNHLE1BQUosQ0FBV0UsUUFBWCxDQUFsQyxDQUFOO0FBRUE7QUE1Qko7O0FBZ0NBLFNBQU9ILE1BQVA7QUFFRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7QUFhTyxTQUFTTSxLQUFULENBQWVyQyxHQUFmLEVBQW9DO0FBRXpDLFNBQU9BLEdBQUcsQ0FBQ3NDLE9BQUosQ0FBWSwwQkFBWixFQUF3QyxRQUF4QyxDQUFQO0FBRUQiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbi8qKlxyXG4gKiBDYXBpdGFsaXplIHRoZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIGZpcnN0IHdvcmQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBjYXBpdGFsaXplLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBtb2RpZmllZCBzdHJpbmcuXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiBcclxuICogY29uc3QgdGV4dCA9ICdoZWxsbyc7XHJcbiAqIFxyXG4gKiBjb25zdCB1Y1RleHQgPSBzdHJpbmdvcHMudWN3b3JkKHRleHQpOyAvLyAnSGVsbG8nO1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVjd29yZChzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcblxyXG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQ2FwaXRhbGl6ZXMgdGhlIGZpcnN0IGxldHRlciBvZiBldmVyeSB3b3JkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gY2FwaXRhbGl6ZS5cclxuICpcclxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY2FwaXRhbGl6ZWQgc3RyaW5nLlxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogXHJcbiAqIGNvbnN0IHRleHQgPSAnaGVsbG8gd29ybGQnO1xyXG4gKiBcclxuICogY29uc3QgdWNXb3JkcyA9IHN0cmluZ29wcy51Y3dvcmRzKHRleHQpOyAvLyAnSGVsbG8gV29ybGQnXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdWN3b3JkcyhzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcblxyXG4gIGNvbnN0IHNwbGl0ID0gc3RyLnNwbGl0KCcgJyk7XHJcblxyXG4gIHNwbGl0LmZvckVhY2goKG8sIGksIGEpID0+IGFbaV0gPSBhW2ldLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgYVtpXS5zbGljZSgxKSk7XHJcblxyXG4gIHJldHVybiBzcGxpdC5qb2luKCcgJyk7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogTWFrZSB0aGUgZmlyc3QgbGV0dGVyIG9mIHRoZSBmaXJzdCB3b3JkIGxvd2VyY2FzZS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIG1vZGlmeS5cclxuICpcclxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgbW9kaWZpZWQgc3RyaW5nLlxyXG4gKiBcclxuICogY29uc3QgdGV4dCA9ICdIZWxsbyc7XHJcbiAqIFxyXG4gKiBjb25zdCBsY1RleHQgPSBzdHJpbmdvcHMubGN3b3JkKHRleHQpOyAvLyAnaGVsbG8nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGN3b3JkKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuXHJcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYWtlIHRoZSBmaXJzdCBsZXR0ZXJzIG9mIGVhY2ggd29yZCBsb3dlcmNhc2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBtb2RpZnkuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIG1vZGlmaWVkIHN0cmluZy5cclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqIFxyXG4gKiBjb25zdCB0ZXh0ID0gJ0hlbGxvIFdvcmxkJztcclxuICogXHJcbiAqIGNvbnN0IGxjV29yZHMgPSBzdHJpbmdvcHMubGNXb3Jkcyh0ZXh0KTsgLy8gJ2hlbGxvIHdvcmxkJ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxjd29yZHMoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cclxuICBjb25zdCBzcGxpdCA9IHN0ci5zcGxpdCgnICcpO1xyXG5cclxuICBzcGxpdC5mb3JFYWNoKChvLCBpLCBhKSA9PiBhW2ldID0gYVtpXS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIGFbaV0uc2xpY2UoMSkpO1xyXG5cclxuICByZXR1cm4gc3BsaXQuam9pbignICcpO1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIFdyYXBzIGEgc3RyaW5nIHRvIGEgZ2l2ZW4gbnVtYmVyIG9mIGNoYXJhY3RlcnMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byB3cmFwLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSB3cmFwcGVkIHN0cmluZy5cclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqIFxyXG4gKiBjb25zdCB0ZXh0ID0gJ0hlbGxvIFdvcmxkJztcclxuICogXHJcbiAqIGNvbnN0IHdyYXBwZWQgPSBzdHJpbmdvcHMud29yZHdyYXAodGV4dCwgNSk7IC8vICdIZWxsbyBcXG4gV29ybGQnXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd29yZHdyYXAoc3RyOiBzdHJpbmcsIGNoYXJOdW1iZXIgOiBudW1iZXIpOiBzdHJpbmcge1xyXG5cclxuICByZXR1cm4gYCR7c3RyLnNsaWNlKDAsIGNoYXJOdW1iZXIgKyAxKX1cXG4ke3N0ci5zbGljZShjaGFyTnVtYmVyICsgMSl9YDtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXZlcnNlcyBhIHN0cmluZy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHJldmVyc2UuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJldmVyc2VkIHN0cmluZy5cclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqIFxyXG4gKiBjb25zdCB0ZXh0ID0gJ0hlbGxvIFdvcmxkJztcclxuICogXHJcbiAqIGNvbnN0IHJldmVyc2UgPSBzdHJpbmdvcHMucmV2ZXJzZSh0ZXh0KTsgLy8gJ2Rscm9XIG9sbGVIJ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2Uoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cclxuICBsZXQgcmV2ZXJzZWQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICBmb3IgKGxldCBpID0gc3RyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcblxyXG4gICAgcmV2ZXJzZWQgKz0gc3RyW2ldO1xyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiByZXZlcnNlZDtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcmltIGFsbCB3aGl0ZXNwYWNlIGZyb20gdGhlIGJlZ2lubmluZyBvZiBhIHN0cmluZy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHJlbW92ZSB3aGl0ZXNwYWNlIGZyb20uXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZyB3aXRob3V0IHdoaXRlc3BhY2UgYXQgdGhlIGJlZ2lubmluZy5cclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqIFxyXG4gKiBjb25zdCB0ZXh0ID0gJyAgSGVsbG8gV29ybGQnO1xyXG4gKiBcclxuICogY29uc3QgbHRyaW0gPSBzdHJpbmdvcHMubHRyaW0odGV4dCk7IC8vICdIZWxsbyBXb3JsZCdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsdHJpbShzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcblxyXG4gIHdoaWxlIChzdHIuY2hhckF0KDApID09ICcgJykgc3RyID0gc3RyLnNsaWNlKDEpO1xyXG5cclxuICByZXR1cm4gc3RyO1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIFRyaW0gYWxsIHdoaXRlc3BhY2UgZnJvbSB0aGUgZW5kIG9mIGEgc3RyaW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gcmVtb3ZlIHdoaXRlc3BhY2UgZnJvbS5cclxuICpcclxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nIHdpdGhvdXQgd2hpdGVzcGFjZSBhdCB0aGUgZW5kLlxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogXHJcbiAqIGNvbnN0IHRleHQgPSAnSGVsbG8gV29ybGQgICc7XHJcbiAqIFxyXG4gKiBjb25zdCBydHJpbSA9IHN0cmluZ29wcy5ydHJpbSh0ZXh0KTsgLy8gJ0hlbGxvIFdvcmxkJ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJ0cmltKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuXHJcbiAgd2hpbGUgKHN0ci5jaGFyQXQoc3RyLmxlbmd0aCAtIDEpID09ICcgJykgc3RyID0gc3RyLnNsaWNlKDAsIC0xKTtcclxuXHJcbiAgcmV0dXJuIHN0cjtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGb3JtYXRzIGEgc3RyaW5nIGludG8gYSByZXByZXNlbnRhdGlvbiBvZiBhIHR5cGUgb2YgY3VycmVuY3kuXHJcbiAqXHJcbiAqIEN1cnJlbnRseSBvbmx5IFVTL0dCIGlzIHN1cHBvcnRlZCBpcyBzdXBwb3J0ZWQgYnV0IG1vcmUgd2lsbCBiZSBhZGRlZCB3aXRoIGxhdGVyIHVwZGF0ZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gYW1vdW50IFRoZSBzdHJpbmcgb3IgbnVtYmVyIHRoYXQgcmVwcmVzZW50cyB0aGUgbW9uZXkgYW1vdW50LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW2xvY2FsZT0nVVMnXSBUaGUgbG9jYWxlIHRvIHVzZSB0byBmb3JtYXQgdGhlIGN1cnJlbmN5LlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBhbW91bnQgaW4gYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoYXQgbG9jYWxlJ3MgY3VycmVuY3kuXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiBcclxuICogY29uc3QgbW9uZXkgPSA1O1xyXG4gKiBcclxuICogY29uc3QgZG9sbGFycyA9IHN0cmluZ29wcy5tb25leShtb25leSk7IC8vICckNSdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtb25leShhbW91bnQ6IChzdHJpbmcgfCBudW1iZXIpLCBsb2NhbGU6IHN0cmluZyA9ICdVUycpOiBzdHJpbmcge1xyXG5cclxuICBsZXQgc3RyID0gYW1vdW50LnRvU3RyaW5nKCk7XHJcblxyXG4gIGxldCBpbmRleCA9IHN0ci5sZW5ndGg7XHJcblxyXG4gIHN3aXRjaCAobG9jYWxlKSB7XHJcblxyXG4gICAgY2FzZSAnVVMnOlxyXG4gICAgICBjb25zdCBjb2lucyA9IHN0ci5pbmRleE9mKCcuJyk7XHJcblxyXG4gICAgICBpZiAoY29pbnMgPiAwKSBpbmRleCA9IGNvaW5zO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IGluZGV4IC0gMzsgaSA+IDA7IGkgLT0gMykge1xyXG5cclxuICAgICAgICBzdHIgPSBgJHtzdHIuc2xpY2UoMCwgaSl9LCR7c3RyLnNsaWNlKGkpfWA7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBicmVhaztcclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gYCQke3N0cn1gO1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIFBhZHMgYSBzdHJpbmcgd2l0aCBhIHN1YnN0cmluZyBvbiBvbmUgb3IgYm90aCBzaWRlcy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHBhZC5cclxuICogQHBhcmFtIHtzdHJpbmd9IHN1YiBUaGUgc3Vic3RyaW5nIHRvIHBhZCB0aGUgc3RyaW5nIHdpdGguXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbYW1vdW50PTFdIFRoZSBhbW91bnQgb2YgdGltZXMgdG8gcGFkIHRoZSBzdHJpbmcgd2l0aCB0aGUgc3Vic3RyaW5nLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3NpZGU9J3JpZ2h0J10gVGhlIHNpZGUgb2YgdGhlIHN0cmluZyB0byBwYWQuIFRoZSBhdmFpbGFibGUgb3B0aW9ucyBhcmUgbGVmdCwgcmlnaHQsIG9yIGJvdGguIElmIGJvdGggaXMgc2VsZWN0ZWQgdGhlbiB0aGUgc3RyaW5nIHdpbGwgYmUgcGFkZGVkIGV2ZW5seSBvbiBib3RoIHNpZGVzIHdpdGggdGhlIHJpZ2h0IGJlaW5nIGZhdm9yZWQgaWYgdGhlIGFtb3VudCBpcyBub3QgZXZlbi5cclxuICpcclxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcGFkZGVkIHN0cmluZy5cclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqIFxyXG4gKiBjb25zdCB0ZXh0ID0gJ0hlbGxvIFdvcmxkJztcclxuICogXHJcbiAqIGNvbnN0IHBhZGRlZCA9IHN0cmluZ29wcy5wYWQodGV4dCwgJyEnLCAyLCAnYm90aCcpOyAvLyAnISFIZWxsbyBXb3JsZCEhJ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhZChzdHI6IHN0cmluZywgc3ViOiBzdHJpbmcsIGFtb3VudDogbnVtYmVyID0gMSwgc2lkZTogc3RyaW5nID0gJ3JpZ2h0Jyk6IHN0cmluZyB7XHJcblxyXG4gIGxldCBwYWRkZWQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICBzd2l0Y2ggKHNpZGUpIHtcclxuXHJcbiAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgcGFkZGVkID0gYCR7c3ViLnJlcGVhdChhbW91bnQpfSR7c3RyfWA7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgcGFkZGVkID0gYCR7c3RyfSR7c3ViLnJlcGVhdChhbW91bnQpfWA7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgJ2JvdGgnOlxyXG4gICAgICBsZXQgcGFkTGVmdDogbnVtYmVyID0gMDtcclxuICAgICAgbGV0IHBhZFJpZ2h0OiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgaWYgKGFtb3VudCAlIDIgPT09IDApIHtcclxuXHJcbiAgICAgICAgcGFkTGVmdCA9IGFtb3VudCAvIDI7XHJcbiAgICAgICAgcGFkUmlnaHQgPSBhbW91bnQgLyAyO1xyXG5cclxuICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgcGFkUmlnaHQgPSBNYXRoLnJvdW5kKGFtb3VudCAvIDIpXHJcbiAgICAgICAgcGFkTGVmdCA9IGFtb3VudCAtIHBhZFJpZ2h0O1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgcGFkZGVkID0gYCR7c3ViLnJlcGVhdChwYWRMZWZ0KX0ke3N0cn0ke3N1Yi5yZXBlYXQocGFkUmlnaHQpfWA7XHJcblxyXG4gICAgICBicmVhaztcclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGFkZGVkO1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEluc2VydHMgSFRNTCBsaW5lIGJyZWFrcyBiZWZvcmUgYWxsIG5ld2xpbmVzIGluIGEgc3RyaW5nLlxyXG4gKiBcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGZvcm1hdCB3aXRoIGxpbmUgYnJlYWtzLlxyXG4gKiBcclxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgZm9ybWF0dGVkIHN0cmluZy5cclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqIFxyXG4gKiBjb25zdCB0ZXh0ID0gJ0hlbGxvIFxcbldvcmxkJztcclxuICogXHJcbiAqIGNvbnN0IGJyZWFrcyA9IHN0cmluZ29wcy5ubDJicih0ZXh0KTsgLy8gJ0hlbGxvIDxici8+V29ybGQnXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbmwyYnIoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cclxuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhcXFxccnxcXFxcbnxcXFxcclxcXFxufFxcXFxuXFxcXHIpL2csICc8YnIgLz4nKTtcclxuXHJcbn1cclxuIl19