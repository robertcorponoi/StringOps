/**
 * Converts a binary string to hexadecimal.
 *
 * @version 0.1.0
 *
 * @param {string} bin The binary string to convert to hexadecimal.
 *
 * @returns {string} Returns the hexadecimal representation of the binary string.
 */

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

/**
 * Count the number of occurances that a substring is found
 * in a string.
 *
 * @version 0.1.0
 *
 * @param {string} haystack The string to search through.
 * @param {string} needle The substring to search for.
 *
 * @returns {number} Returns the number of times the substring was found in the string.
 */

function count(haystack, needle) {
  var count = 0;
  var results = true;
  var lastIndex = 0;

  while (results) {
    var index = haystack.indexOf(needle, lastIndex);

    if (index > -1) {
      count++;
      lastIndex = index + 1;
    } else {
      results = false;
    }
  }

  return count;
}
/**
 * Counts the number of times each character appears in the string.
 *
 * @version 0.1.0
 *
 * @param {string} str The string to count characters of.
 *
 * @returns {Object} Returns an object with each key being a character and the value being its count.
 */

function countChars(str) {
  var count = new Object(null);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var character = _step.value;
      if (!count[character]) count[character] = 0;
      count[character]++;
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

  return count;
}
/**
 * Find the position of the nth occurance of a substring in a string.
 *
 * @version 0.1.0
 *
 * @param {string} str The string to search for the substring.
 * @param {string} sub The substring to searh for.
 * @param {number} occurance Determines which occurance of the substring will be returned.
 *
 * @returns {number} Returns the index of the substring.
 */

function nthIndexOf(str, sub, occurance) {
  var lastIndex = 0;

  for (var i = 0; i < occurance; i++) {
    var index = str.indexOf(sub, lastIndex);
    if (index == -1) return;
    lastIndex = index + 1;
  }

  return lastIndex;
}
/**
 * Calculates the Levenshtein distance between two strings.
 *
 * Reference: https://gist.github.com/andrei-m/982927
 *
 * @version 0.1.0
 *
 * @param {string} str1 The first string.
 * @param {string} str2 The second string.
 *
 * @returns {number} Returns the number of operations required to match the two strings.
 */

function levenshtein(str1, str2) {
  if (str1.length == 0) return str2.length;
  if (str2.length == 0) return str1.length;
  var table = [];

  for (var i = 0; i <= str2.length; ++i) {
    table[i] = [i];
  }

  for (var j = 0; j <= str1.length; ++j) {
    table[0][j] = j;
  }

  for (var _i = 1; _i <= str2.length; ++_i) {
    for (var _j = 1; _j <= str1.length; ++_j) {
      if (str2.charAt(_i - 1) == str1.charAt(_j - 1)) {
        table[_i][_j] = table[_i - 1][_j - 1];
      } else {
        table[_i][_j] = Math.min(table[_i - 1][_j - 1] + 1, Math.min(table[_i][_j - 1] + 1, table[_i - 1][_j] + 1));
      }
    }
  }

  return table[str2.length][str1.length];
}

/**
 * Capitalize the first letter of the first word.
 *
 * @version 0.1.0
 *
 * @param {string} str The string to capitalize.
 *
 * @returns {string} Returns the modified string.
 */

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

export { bin2Hex, count, countChars, hex2Bin, lcword, lcwords, levenshtein, ltrim, money, nthIndexOf, pad, reverse, rtrim, ucword, ucwords, wordwrap };
