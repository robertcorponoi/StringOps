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
exports.center = center;
exports.swapcase = swapcase;

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
 * Souce: PHP
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
/**
 * Makes a string take up a certain amount of characters with the provided string in the center.
 * 
 * This is similar to `pad` above but is based off python's center.
 * 
 * Source: Python - center
 * 
 * @param {string} str The string to center.
 * @param {number} length The length of the returned string, including the provided string.
 * @param {string} [char=' '] The character to fill the missing space on each side.
 * 
 * @returns {string} Returns the centered string.
 */


function center(str, length) {
  var _char = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';

  var strLength = str.length;
  if (strLength >= length) return str;
  var charsOnEachSide = length - strLength;
  return pad(str, _char, charsOnEachSide, 'both');
}
/**
 * Swaps the case of each letter in a string.
 * 
 * Souce: Python - swapcase
 * 
 * @param {string} str The string to swap cases on.
 * 
 * @returns {string} Returns the case swapped string.
 */


function swapcase(str) {
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var swapped = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _char2 = _step.value;
      if (!characters.includes(_char2)) swapped += _char2;else if (_char2 === _char2.toUpperCase()) swapped += _char2.toLowerCase();else swapped += _char2.toUpperCase();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return swapped;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mb3JtYXQudHMiXSwibmFtZXMiOlsidWN3b3JkIiwic3RyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInVjd29yZHMiLCJzcGxpdCIsImZvckVhY2giLCJvIiwiaSIsImEiLCJqb2luIiwibGN3b3JkIiwidG9Mb3dlckNhc2UiLCJsY3dvcmRzIiwid29yZHdyYXAiLCJjaGFyTnVtYmVyIiwicmV2ZXJzZSIsInJldmVyc2VkIiwibGVuZ3RoIiwibHRyaW0iLCJydHJpbSIsIm1vbmV5IiwiYW1vdW50IiwibG9jYWxlIiwidG9TdHJpbmciLCJpbmRleCIsImNvaW5zIiwiaW5kZXhPZiIsInBhZCIsInN1YiIsInNpZGUiLCJwYWRkZWQiLCJyZXBlYXQiLCJwYWRMZWZ0IiwicGFkUmlnaHQiLCJNYXRoIiwicm91bmQiLCJubDJiciIsInJlcGxhY2UiLCJjZW50ZXIiLCJjaGFyIiwic3RyTGVuZ3RoIiwiY2hhcnNPbkVhY2hTaWRlIiwic3dhcGNhc2UiLCJjaGFyYWN0ZXJzIiwic3dhcHBlZCIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYU8sU0FBU0EsTUFBVCxDQUFnQkMsR0FBaEIsRUFBcUM7QUFDMUMsU0FBT0EsR0FBRyxDQUFDQyxNQUFKLENBQVcsQ0FBWCxFQUFjQyxXQUFkLEtBQThCRixHQUFHLENBQUNHLEtBQUosQ0FBVSxDQUFWLENBQXJDO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7O0FBYU8sU0FBU0MsT0FBVCxDQUFpQkosR0FBakIsRUFBc0M7QUFDM0MsTUFBTUssS0FBb0IsR0FBR0wsR0FBRyxDQUFDSyxLQUFKLENBQVUsR0FBVixDQUE3QjtBQUVBQSxFQUFBQSxLQUFLLENBQUNDLE9BQU4sQ0FBYyxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUDtBQUFBLFdBQWFBLENBQUMsQ0FBQ0QsQ0FBRCxDQUFELEdBQU9DLENBQUMsQ0FBQ0QsQ0FBRCxDQUFELENBQUtQLE1BQUwsQ0FBWSxDQUFaLEVBQWVDLFdBQWYsS0FBK0JPLENBQUMsQ0FBQ0QsQ0FBRCxDQUFELENBQUtMLEtBQUwsQ0FBVyxDQUFYLENBQW5EO0FBQUEsR0FBZDtBQUVBLFNBQU9FLEtBQUssQ0FBQ0ssSUFBTixDQUFXLEdBQVgsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7QUFXTyxTQUFTQyxNQUFULENBQWdCWCxHQUFoQixFQUFxQztBQUUxQyxTQUFPQSxHQUFHLENBQUNDLE1BQUosQ0FBVyxDQUFYLEVBQWNXLFdBQWQsS0FBOEJaLEdBQUcsQ0FBQ0csS0FBSixDQUFVLENBQVYsQ0FBckM7QUFFRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7QUFhTyxTQUFTVSxPQUFULENBQWlCYixHQUFqQixFQUFzQztBQUMzQyxNQUFNSyxLQUFvQixHQUFHTCxHQUFHLENBQUNLLEtBQUosQ0FBVSxHQUFWLENBQTdCO0FBRUFBLEVBQUFBLEtBQUssQ0FBQ0MsT0FBTixDQUFjLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxDQUFQO0FBQUEsV0FBYUEsQ0FBQyxDQUFDRCxDQUFELENBQUQsR0FBT0MsQ0FBQyxDQUFDRCxDQUFELENBQUQsQ0FBS1AsTUFBTCxDQUFZLENBQVosRUFBZVcsV0FBZixLQUErQkgsQ0FBQyxDQUFDRCxDQUFELENBQUQsQ0FBS0wsS0FBTCxDQUFXLENBQVgsQ0FBbkQ7QUFBQSxHQUFkO0FBRUEsU0FBT0UsS0FBSyxDQUFDSyxJQUFOLENBQVcsR0FBWCxDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7O0FBYU8sU0FBU0ksUUFBVCxDQUFrQmQsR0FBbEIsRUFBK0JlLFVBQS9CLEVBQTREO0FBQ2pFLG1CQUFVZixHQUFHLENBQUNHLEtBQUosQ0FBVSxDQUFWLEVBQWFZLFVBQVUsR0FBRyxDQUExQixDQUFWLGVBQTJDZixHQUFHLENBQUNHLEtBQUosQ0FBVVksVUFBVSxHQUFHLENBQXZCLENBQTNDO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7O0FBYU8sU0FBU0MsT0FBVCxDQUFpQmhCLEdBQWpCLEVBQXNDO0FBQzNDLE1BQUlpQixRQUFnQixHQUFHLEVBQXZCOztBQUVBLE9BQUssSUFBSVQsQ0FBQyxHQUFHUixHQUFHLENBQUNrQixNQUFKLEdBQWEsQ0FBMUIsRUFBNkJWLENBQUMsSUFBSSxDQUFsQyxFQUFxQ0EsQ0FBQyxFQUF0QztBQUEwQ1MsSUFBQUEsUUFBUSxJQUFJakIsR0FBRyxDQUFDUSxDQUFELENBQWY7QUFBMUM7O0FBRUEsU0FBT1MsUUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7OztBQWFPLFNBQVNFLEtBQVQsQ0FBZW5CLEdBQWYsRUFBb0M7QUFDekMsU0FBT0EsR0FBRyxDQUFDQyxNQUFKLENBQVcsQ0FBWCxLQUFpQixHQUF4QjtBQUE2QkQsSUFBQUEsR0FBRyxHQUFHQSxHQUFHLENBQUNHLEtBQUosQ0FBVSxDQUFWLENBQU47QUFBN0I7O0FBRUEsU0FBT0gsR0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7OztBQWFPLFNBQVNvQixLQUFULENBQWVwQixHQUFmLEVBQW9DO0FBQ3pDLFNBQU9BLEdBQUcsQ0FBQ0MsTUFBSixDQUFXRCxHQUFHLENBQUNrQixNQUFKLEdBQWEsQ0FBeEIsS0FBOEIsR0FBckM7QUFBMENsQixJQUFBQSxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0csS0FBSixDQUFVLENBQVYsRUFBYSxDQUFDLENBQWQsQ0FBTjtBQUExQzs7QUFFQSxTQUFPSCxHQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JPLFNBQVNxQixLQUFULENBQWVDLE1BQWYsRUFBeUU7QUFBQSxNQUEvQkMsTUFBK0IsdUVBQWQsSUFBYztBQUM5RSxNQUFJdkIsR0FBVyxHQUFHc0IsTUFBTSxDQUFDRSxRQUFQLEVBQWxCO0FBRUEsTUFBSUMsS0FBYSxHQUFHekIsR0FBRyxDQUFDa0IsTUFBeEI7O0FBRUEsVUFBUUssTUFBUjtBQUNFLFNBQUssSUFBTDtBQUNFLFVBQU1HLEtBQUssR0FBRzFCLEdBQUcsQ0FBQzJCLE9BQUosQ0FBWSxHQUFaLENBQWQ7QUFFQSxVQUFJRCxLQUFLLEdBQUcsQ0FBWixFQUFlRCxLQUFLLEdBQUdDLEtBQVI7O0FBRWYsV0FBSyxJQUFJbEIsQ0FBQyxHQUFHaUIsS0FBSyxHQUFHLENBQXJCLEVBQXdCakIsQ0FBQyxHQUFHLENBQTVCLEVBQStCQSxDQUFDLElBQUksQ0FBcEM7QUFBdUNSLFFBQUFBLEdBQUcsYUFBTUEsR0FBRyxDQUFDRyxLQUFKLENBQVUsQ0FBVixFQUFhSyxDQUFiLENBQU4sY0FBeUJSLEdBQUcsQ0FBQ0csS0FBSixDQUFVSyxDQUFWLENBQXpCLENBQUg7QUFBdkM7O0FBRUE7QUFSSjs7QUFXQSxvQkFBV1IsR0FBWDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCTyxTQUFTNEIsR0FBVCxDQUFhNUIsR0FBYixFQUEwQjZCLEdBQTFCLEVBQTJGO0FBQUEsTUFBcERQLE1BQW9ELHVFQUFuQyxDQUFtQztBQUFBLE1BQWhDUSxJQUFnQyx1RUFBakIsT0FBaUI7QUFDaEcsTUFBSUMsTUFBYyxHQUFHLEVBQXJCOztBQUVBLFVBQVFELElBQVI7QUFDRSxTQUFLLE1BQUw7QUFDRUMsTUFBQUEsTUFBTSxhQUFNRixHQUFHLENBQUNHLE1BQUosQ0FBV1YsTUFBWCxDQUFOLFNBQTJCdEIsR0FBM0IsQ0FBTjtBQUNBOztBQUNGLFNBQUssT0FBTDtBQUNFK0IsTUFBQUEsTUFBTSxhQUFNL0IsR0FBTixTQUFZNkIsR0FBRyxDQUFDRyxNQUFKLENBQVdWLE1BQVgsQ0FBWixDQUFOO0FBQ0E7O0FBQ0YsU0FBSyxNQUFMO0FBQ0UsVUFBSVcsT0FBZSxHQUFHLENBQXRCO0FBQ0EsVUFBSUMsUUFBZ0IsR0FBRyxDQUF2Qjs7QUFFQSxVQUFJWixNQUFNLEdBQUcsQ0FBVCxLQUFlLENBQW5CLEVBQXNCO0FBQ3BCVyxRQUFBQSxPQUFPLEdBQUdYLE1BQU0sR0FBRyxDQUFuQjtBQUNBWSxRQUFBQSxRQUFRLEdBQUdaLE1BQU0sR0FBRyxDQUFwQjtBQUNELE9BSEQsTUFHTztBQUNMWSxRQUFBQSxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXZCxNQUFNLEdBQUcsQ0FBcEIsQ0FBWDtBQUNBVyxRQUFBQSxPQUFPLEdBQUdYLE1BQU0sR0FBR1ksUUFBbkI7QUFDRDs7QUFFREgsTUFBQUEsTUFBTSxhQUFNRixHQUFHLENBQUNHLE1BQUosQ0FBV0MsT0FBWCxDQUFOLFNBQTRCakMsR0FBNUIsU0FBa0M2QixHQUFHLENBQUNHLE1BQUosQ0FBV0UsUUFBWCxDQUFsQyxDQUFOO0FBRUE7QUFyQko7O0FBd0JBLFNBQU9ILE1BQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7OztBQWVPLFNBQVNNLEtBQVQsQ0FBZXJDLEdBQWYsRUFBb0M7QUFDekMsU0FBT0EsR0FBRyxDQUFDc0MsT0FBSixDQUFZLDBCQUFaLEVBQXdDLFFBQXhDLENBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7QUFhTyxTQUFTQyxNQUFULENBQWdCdkMsR0FBaEIsRUFBNkJrQixNQUE3QixFQUF5RTtBQUFBLE1BQTVCc0IsS0FBNEIsdUVBQWIsR0FBYTs7QUFDOUUsTUFBTUMsU0FBaUIsR0FBR3pDLEdBQUcsQ0FBQ2tCLE1BQTlCO0FBRUEsTUFBSXVCLFNBQVMsSUFBSXZCLE1BQWpCLEVBQXlCLE9BQU9sQixHQUFQO0FBRXpCLE1BQU0wQyxlQUF1QixHQUFHeEIsTUFBTSxHQUFHdUIsU0FBekM7QUFFQSxTQUFPYixHQUFHLENBQUM1QixHQUFELEVBQU13QyxLQUFOLEVBQVlFLGVBQVosRUFBNkIsTUFBN0IsQ0FBVjtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7O0FBU08sU0FBU0MsUUFBVCxDQUFrQjNDLEdBQWxCLEVBQXVDO0FBQzVDLE1BQU00QyxVQUFrQixHQUFHLHNEQUEzQjtBQUVBLE1BQUlDLE9BQWUsR0FBRyxFQUF0QjtBQUg0QztBQUFBO0FBQUE7O0FBQUE7QUFLNUMseUJBQWlCN0MsR0FBakIsOEhBQXNCO0FBQUEsVUFBYndDLE1BQWE7QUFDcEIsVUFBSSxDQUFDSSxVQUFVLENBQUNFLFFBQVgsQ0FBb0JOLE1BQXBCLENBQUwsRUFBZ0NLLE9BQU8sSUFBSUwsTUFBWCxDQUFoQyxLQUNLLElBQUlBLE1BQUksS0FBS0EsTUFBSSxDQUFDdEMsV0FBTCxFQUFiLEVBQWlDMkMsT0FBTyxJQUFJTCxNQUFJLENBQUM1QixXQUFMLEVBQVgsQ0FBakMsS0FDQWlDLE9BQU8sSUFBSUwsTUFBSSxDQUFDdEMsV0FBTCxFQUFYO0FBQ047QUFUMkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFXNUMsU0FBTzJDLE9BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuLyoqXHJcbiAqIENhcGl0YWxpemUgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgZmlyc3Qgd29yZC5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGNhcGl0YWxpemUuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIG1vZGlmaWVkIHN0cmluZy5cclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqIFxyXG4gKiBjb25zdCB0ZXh0ID0gJ2hlbGxvJztcclxuICogXHJcbiAqIGNvbnN0IHVjVGV4dCA9IHN0cmluZ29wcy51Y3dvcmQodGV4dCk7IC8vICdIZWxsbyc7XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdWN3b3JkKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xyXG59XHJcblxyXG4vKipcclxuICogQ2FwaXRhbGl6ZXMgdGhlIGZpcnN0IGxldHRlciBvZiBldmVyeSB3b3JkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gY2FwaXRhbGl6ZS5cclxuICpcclxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY2FwaXRhbGl6ZWQgc3RyaW5nLlxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogXHJcbiAqIGNvbnN0IHRleHQgPSAnaGVsbG8gd29ybGQnO1xyXG4gKiBcclxuICogY29uc3QgdWNXb3JkcyA9IHN0cmluZ29wcy51Y3dvcmRzKHRleHQpOyAvLyAnSGVsbG8gV29ybGQnXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdWN3b3JkcyhzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgY29uc3Qgc3BsaXQ6IEFycmF5PHN0cmluZz4gPSBzdHIuc3BsaXQoJyAnKTtcclxuXHJcbiAgc3BsaXQuZm9yRWFjaCgobywgaSwgYSkgPT4gYVtpXSA9IGFbaV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBhW2ldLnNsaWNlKDEpKTtcclxuXHJcbiAgcmV0dXJuIHNwbGl0LmpvaW4oJyAnKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ha2UgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgZmlyc3Qgd29yZCBsb3dlcmNhc2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBtb2RpZnkuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIG1vZGlmaWVkIHN0cmluZy5cclxuICogXHJcbiAqIGNvbnN0IHRleHQgPSAnSGVsbG8nO1xyXG4gKiBcclxuICogY29uc3QgbGNUZXh0ID0gc3RyaW5nb3BzLmxjd29yZCh0ZXh0KTsgLy8gJ2hlbGxvJ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxjd29yZChzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcblxyXG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogTWFrZSB0aGUgZmlyc3QgbGV0dGVycyBvZiBlYWNoIHdvcmQgbG93ZXJjYXNlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gbW9kaWZ5LlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBtb2RpZmllZCBzdHJpbmcuXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiBcclxuICogY29uc3QgdGV4dCA9ICdIZWxsbyBXb3JsZCc7XHJcbiAqIFxyXG4gKiBjb25zdCBsY1dvcmRzID0gc3RyaW5nb3BzLmxjV29yZHModGV4dCk7IC8vICdoZWxsbyB3b3JsZCdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsY3dvcmRzKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICBjb25zdCBzcGxpdDogQXJyYXk8c3RyaW5nPiA9IHN0ci5zcGxpdCgnICcpO1xyXG5cclxuICBzcGxpdC5mb3JFYWNoKChvLCBpLCBhKSA9PiBhW2ldID0gYVtpXS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIGFbaV0uc2xpY2UoMSkpO1xyXG5cclxuICByZXR1cm4gc3BsaXQuam9pbignICcpO1xyXG59XHJcblxyXG4vKipcclxuICogV3JhcHMgYSBzdHJpbmcgdG8gYSBnaXZlbiBudW1iZXIgb2YgY2hhcmFjdGVycy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHdyYXAuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHdyYXBwZWQgc3RyaW5nLlxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogXHJcbiAqIGNvbnN0IHRleHQgPSAnSGVsbG8gV29ybGQnO1xyXG4gKiBcclxuICogY29uc3Qgd3JhcHBlZCA9IHN0cmluZ29wcy53b3Jkd3JhcCh0ZXh0LCA1KTsgLy8gJ0hlbGxvIFxcbiBXb3JsZCdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3b3Jkd3JhcChzdHI6IHN0cmluZywgY2hhck51bWJlciA6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgcmV0dXJuIGAke3N0ci5zbGljZSgwLCBjaGFyTnVtYmVyICsgMSl9XFxuJHtzdHIuc2xpY2UoY2hhck51bWJlciArIDEpfWA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXZlcnNlcyBhIHN0cmluZy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHJldmVyc2UuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJldmVyc2VkIHN0cmluZy5cclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqIFxyXG4gKiBjb25zdCB0ZXh0ID0gJ0hlbGxvIFdvcmxkJztcclxuICogXHJcbiAqIGNvbnN0IHJldmVyc2UgPSBzdHJpbmdvcHMucmV2ZXJzZSh0ZXh0KTsgLy8gJ2Rscm9XIG9sbGVIJ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2Uoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIGxldCByZXZlcnNlZDogc3RyaW5nID0gJyc7XHJcblxyXG4gIGZvciAobGV0IGkgPSBzdHIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHJldmVyc2VkICs9IHN0cltpXTtcclxuXHJcbiAgcmV0dXJuIHJldmVyc2VkO1xyXG59XHJcblxyXG4vKipcclxuICogVHJpbSBhbGwgd2hpdGVzcGFjZSBmcm9tIHRoZSBiZWdpbm5pbmcgb2YgYSBzdHJpbmcuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byByZW1vdmUgd2hpdGVzcGFjZSBmcm9tLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcgd2l0aG91dCB3aGl0ZXNwYWNlIGF0IHRoZSBiZWdpbm5pbmcuXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiBcclxuICogY29uc3QgdGV4dCA9ICcgIEhlbGxvIFdvcmxkJztcclxuICogXHJcbiAqIGNvbnN0IGx0cmltID0gc3RyaW5nb3BzLmx0cmltKHRleHQpOyAvLyAnSGVsbG8gV29ybGQnXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbHRyaW0oc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIHdoaWxlIChzdHIuY2hhckF0KDApID09ICcgJykgc3RyID0gc3RyLnNsaWNlKDEpO1xyXG5cclxuICByZXR1cm4gc3RyO1xyXG59XHJcblxyXG4vKipcclxuICogVHJpbSBhbGwgd2hpdGVzcGFjZSBmcm9tIHRoZSBlbmQgb2YgYSBzdHJpbmcuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byByZW1vdmUgd2hpdGVzcGFjZSBmcm9tLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcgd2l0aG91dCB3aGl0ZXNwYWNlIGF0IHRoZSBlbmQuXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiBcclxuICogY29uc3QgdGV4dCA9ICdIZWxsbyBXb3JsZCAgJztcclxuICogXHJcbiAqIGNvbnN0IHJ0cmltID0gc3RyaW5nb3BzLnJ0cmltKHRleHQpOyAvLyAnSGVsbG8gV29ybGQnXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcnRyaW0oc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIHdoaWxlIChzdHIuY2hhckF0KHN0ci5sZW5ndGggLSAxKSA9PSAnICcpIHN0ciA9IHN0ci5zbGljZSgwLCAtMSk7XHJcblxyXG4gIHJldHVybiBzdHI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGb3JtYXRzIGEgc3RyaW5nIGludG8gYSByZXByZXNlbnRhdGlvbiBvZiBhIHR5cGUgb2YgY3VycmVuY3kuXHJcbiAqXHJcbiAqIEN1cnJlbnRseSBvbmx5IFVTL0dCIGlzIHN1cHBvcnRlZCBpcyBzdXBwb3J0ZWQgYnV0IG1vcmUgd2lsbCBiZSBhZGRlZCB3aXRoIGxhdGVyIHVwZGF0ZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gYW1vdW50IFRoZSBzdHJpbmcgb3IgbnVtYmVyIHRoYXQgcmVwcmVzZW50cyB0aGUgbW9uZXkgYW1vdW50LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW2xvY2FsZT0nVVMnXSBUaGUgbG9jYWxlIHRvIHVzZSB0byBmb3JtYXQgdGhlIGN1cnJlbmN5LlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBhbW91bnQgaW4gYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoYXQgbG9jYWxlJ3MgY3VycmVuY3kuXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiBcclxuICogY29uc3QgbW9uZXkgPSA1O1xyXG4gKiBcclxuICogY29uc3QgZG9sbGFycyA9IHN0cmluZ29wcy5tb25leShtb25leSk7IC8vICckNSdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtb25leShhbW91bnQ6IChzdHJpbmcgfCBudW1iZXIpLCBsb2NhbGU6IHN0cmluZyA9ICdVUycpOiBzdHJpbmcge1xyXG4gIGxldCBzdHI6IHN0cmluZyA9IGFtb3VudC50b1N0cmluZygpO1xyXG5cclxuICBsZXQgaW5kZXg6IG51bWJlciA9IHN0ci5sZW5ndGg7XHJcblxyXG4gIHN3aXRjaCAobG9jYWxlKSB7XHJcbiAgICBjYXNlICdVUyc6XHJcbiAgICAgIGNvbnN0IGNvaW5zID0gc3RyLmluZGV4T2YoJy4nKTtcclxuXHJcbiAgICAgIGlmIChjb2lucyA+IDApIGluZGV4ID0gY29pbnM7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gaW5kZXggLSAzOyBpID4gMDsgaSAtPSAzKSBzdHIgPSBgJHtzdHIuc2xpY2UoMCwgaSl9LCR7c3RyLnNsaWNlKGkpfWA7XHJcblxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIHJldHVybiBgJCR7c3RyfWA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYWRzIGEgc3RyaW5nIHdpdGggYSBzdWJzdHJpbmcgb24gb25lIG9yIGJvdGggc2lkZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBwYWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdWIgVGhlIHN1YnN0cmluZyB0byBwYWQgdGhlIHN0cmluZyB3aXRoLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gW2Ftb3VudD0xXSBUaGUgYW1vdW50IG9mIHRpbWVzIHRvIHBhZCB0aGUgc3RyaW5nIHdpdGggdGhlIHN1YnN0cmluZy5cclxuICogQHBhcmFtIHtzdHJpbmd9IFtzaWRlPSdyaWdodCddIFRoZSBzaWRlIG9mIHRoZSBzdHJpbmcgdG8gcGFkLiBUaGUgYXZhaWxhYmxlIG9wdGlvbnMgYXJlIGxlZnQsIHJpZ2h0LCBvciBib3RoLiBJZiBib3RoIGlzIHNlbGVjdGVkIHRoZW4gdGhlIHN0cmluZyB3aWxsIGJlIHBhZGRlZCBldmVubHkgb24gYm90aCBzaWRlcyB3aXRoIHRoZSByaWdodCBiZWluZyBmYXZvcmVkIGlmIHRoZSBhbW91bnQgaXMgbm90IGV2ZW4uXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHBhZGRlZCBzdHJpbmcuXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiBcclxuICogY29uc3QgdGV4dCA9ICdIZWxsbyBXb3JsZCc7XHJcbiAqIFxyXG4gKiBjb25zdCBwYWRkZWQgPSBzdHJpbmdvcHMucGFkKHRleHQsICchJywgMiwgJ2JvdGgnKTsgLy8gJyEhSGVsbG8gV29ybGQhISdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYWQoc3RyOiBzdHJpbmcsIHN1Yjogc3RyaW5nLCBhbW91bnQ6IG51bWJlciA9IDEsIHNpZGU6IHN0cmluZyA9ICdyaWdodCcpOiBzdHJpbmcge1xyXG4gIGxldCBwYWRkZWQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICBzd2l0Y2ggKHNpZGUpIHtcclxuICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICBwYWRkZWQgPSBgJHtzdWIucmVwZWF0KGFtb3VudCl9JHtzdHJ9YDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgIHBhZGRlZCA9IGAke3N0cn0ke3N1Yi5yZXBlYXQoYW1vdW50KX1gO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ2JvdGgnOlxyXG4gICAgICBsZXQgcGFkTGVmdDogbnVtYmVyID0gMDtcclxuICAgICAgbGV0IHBhZFJpZ2h0OiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgaWYgKGFtb3VudCAlIDIgPT09IDApIHtcclxuICAgICAgICBwYWRMZWZ0ID0gYW1vdW50IC8gMjtcclxuICAgICAgICBwYWRSaWdodCA9IGFtb3VudCAvIDI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGFkUmlnaHQgPSBNYXRoLnJvdW5kKGFtb3VudCAvIDIpXHJcbiAgICAgICAgcGFkTGVmdCA9IGFtb3VudCAtIHBhZFJpZ2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwYWRkZWQgPSBgJHtzdWIucmVwZWF0KHBhZExlZnQpfSR7c3RyfSR7c3ViLnJlcGVhdChwYWRSaWdodCl9YDtcclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhZGRlZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluc2VydHMgSFRNTCBsaW5lIGJyZWFrcyBiZWZvcmUgYWxsIG5ld2xpbmVzIGluIGEgc3RyaW5nLlxyXG4gKiBcclxuICogU291Y2U6IFBIUFxyXG4gKiBcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGZvcm1hdCB3aXRoIGxpbmUgYnJlYWtzLlxyXG4gKiBcclxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgZm9ybWF0dGVkIHN0cmluZy5cclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqIFxyXG4gKiBjb25zdCB0ZXh0ID0gJ0hlbGxvIFxcbldvcmxkJztcclxuICogXHJcbiAqIGNvbnN0IGJyZWFrcyA9IHN0cmluZ29wcy5ubDJicih0ZXh0KTsgLy8gJ0hlbGxvIDxici8+V29ybGQnXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbmwyYnIoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFxcXFxyfFxcXFxufFxcXFxyXFxcXG58XFxcXG5cXFxccikvZywgJzxiciAvPicpO1xyXG59XHJcblxyXG4vKipcclxuICogTWFrZXMgYSBzdHJpbmcgdGFrZSB1cCBhIGNlcnRhaW4gYW1vdW50IG9mIGNoYXJhY3RlcnMgd2l0aCB0aGUgcHJvdmlkZWQgc3RyaW5nIGluIHRoZSBjZW50ZXIuXHJcbiAqIFxyXG4gKiBUaGlzIGlzIHNpbWlsYXIgdG8gYHBhZGAgYWJvdmUgYnV0IGlzIGJhc2VkIG9mZiBweXRob24ncyBjZW50ZXIuXHJcbiAqIFxyXG4gKiBTb3VyY2U6IFB5dGhvbiAtIGNlbnRlclxyXG4gKiBcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGNlbnRlci5cclxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSByZXR1cm5lZCBzdHJpbmcsIGluY2x1ZGluZyB0aGUgcHJvdmlkZWQgc3RyaW5nLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NoYXI9JyAnXSBUaGUgY2hhcmFjdGVyIHRvIGZpbGwgdGhlIG1pc3Npbmcgc3BhY2Ugb24gZWFjaCBzaWRlLlxyXG4gKiBcclxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY2VudGVyZWQgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNlbnRlcihzdHI6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGNoYXI6IHN0cmluZyA9ICcgJyk6IHN0cmluZyB7XHJcbiAgY29uc3Qgc3RyTGVuZ3RoOiBudW1iZXIgPSBzdHIubGVuZ3RoO1xyXG5cclxuICBpZiAoc3RyTGVuZ3RoID49IGxlbmd0aCkgcmV0dXJuIHN0cjtcclxuXHJcbiAgY29uc3QgY2hhcnNPbkVhY2hTaWRlOiBudW1iZXIgPSBsZW5ndGggLSBzdHJMZW5ndGg7XHJcblxyXG4gIHJldHVybiBwYWQoc3RyLCBjaGFyLCBjaGFyc09uRWFjaFNpZGUsICdib3RoJyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTd2FwcyB0aGUgY2FzZSBvZiBlYWNoIGxldHRlciBpbiBhIHN0cmluZy5cclxuICogXHJcbiAqIFNvdWNlOiBQeXRob24gLSBzd2FwY2FzZVxyXG4gKiBcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHN3YXAgY2FzZXMgb24uXHJcbiAqIFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjYXNlIHN3YXBwZWQgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN3YXBjYXNlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICBjb25zdCBjaGFyYWN0ZXJzOiBzdHJpbmcgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eic7XHJcblxyXG4gIGxldCBzd2FwcGVkOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgZm9yIChsZXQgY2hhciBvZiBzdHIpIHtcclxuICAgIGlmICghY2hhcmFjdGVycy5pbmNsdWRlcyhjaGFyKSkgc3dhcHBlZCArPSBjaGFyO1xyXG4gICAgZWxzZSBpZiAoY2hhciA9PT0gY2hhci50b1VwcGVyQ2FzZSgpKSBzd2FwcGVkICs9IGNoYXIudG9Mb3dlckNhc2UoKTtcclxuICAgIGVsc2Ugc3dhcHBlZCArPSBjaGFyLnRvVXBwZXJDYXNlKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3dhcHBlZDtcclxufVxyXG4iXX0=