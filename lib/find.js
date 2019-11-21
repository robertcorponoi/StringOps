'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.count = count;
exports.countChars = countChars;
exports.nthIndexOf = nthIndexOf;
exports.levenshtein = levenshtein;

/**
 * Count the number of occurances that a substring is found in a string.
 *
 * @param {string} haystack The string to search through.
 * @param {string} needle The substring to search for.
 *
 * @returns {number} Returns the number of times the substring was found in the string.
 * 
 * @example
 * 
 * const text = 'hello hello world';
 * 
 * const helloCount = stringops.count(text, 'hello'); // 2
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
 * @param {string} str The string to count characters of.
 *
 * @returns {Object} Returns an object with each key being a character and the value being its count.
 * 
 * @example
 * 
 * const text = 'hello world';
 * 
 * const charCount = stringops.countChars(text); // { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
 */


function countChars(str) {
  var count = {};
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
 * @param {string} str The string to search for the substring.
 * @param {string} sub The substring to searh for.
 * @param {number} occurance Determines which occurance of the substring will be returned.
 *
 * @returns {number} Returns the index of the substring.
 * 
 * @example
 * 
 * const text = 'hello hello world';
 * 
 * const nthIndex = stringops.nthIndexOf(text, 'l', 3); // 7
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
 * @param {string} str1 The first string.
 * @param {string} str2 The second string.
 *
 * @returns {number} Returns the number of operations required to match the two strings.
 * 
 * @example
 * 
 * const str1 = 'book';
 * const str2 = 'bear';
 * 
 * const lev = stringops.levenshtein(str1, str2); // 3
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maW5kLnRzIl0sIm5hbWVzIjpbImNvdW50IiwiaGF5c3RhY2siLCJuZWVkbGUiLCJyZXN1bHRzIiwibGFzdEluZGV4IiwiaW5kZXgiLCJpbmRleE9mIiwiY291bnRDaGFycyIsInN0ciIsImNoYXJhY3RlciIsIm50aEluZGV4T2YiLCJzdWIiLCJvY2N1cmFuY2UiLCJpIiwibGV2ZW5zaHRlaW4iLCJzdHIxIiwic3RyMiIsImxlbmd0aCIsInRhYmxlIiwiaiIsImNoYXJBdCIsIk1hdGgiLCJtaW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7O0FBY08sU0FBU0EsS0FBVCxDQUFlQyxRQUFmLEVBQWlDQyxNQUFqQyxFQUF5RDtBQUU5RCxNQUFJRixLQUFhLEdBQUcsQ0FBcEI7QUFFQSxNQUFJRyxPQUFnQixHQUFHLElBQXZCO0FBRUEsTUFBSUMsU0FBaUIsR0FBRyxDQUF4Qjs7QUFFQSxTQUFPRCxPQUFQLEVBQWdCO0FBRWQsUUFBTUUsS0FBYSxHQUFHSixRQUFRLENBQUNLLE9BQVQsQ0FBaUJKLE1BQWpCLEVBQXlCRSxTQUF6QixDQUF0Qjs7QUFFQSxRQUFJQyxLQUFLLEdBQUcsQ0FBQyxDQUFiLEVBQWdCO0FBRWRMLE1BQUFBLEtBQUs7QUFFTEksTUFBQUEsU0FBUyxHQUFHQyxLQUFLLEdBQUcsQ0FBcEI7QUFFRCxLQU5ELE1BTU87QUFFTEYsTUFBQUEsT0FBTyxHQUFHLEtBQVY7QUFFRDtBQUVGOztBQUVELFNBQU9ILEtBQVA7QUFFRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7QUFhTyxTQUFTTyxVQUFULENBQW9CQyxHQUFwQixFQUE0QztBQUVqRCxNQUFNUixLQUFnQixHQUFHLEVBQXpCO0FBRmlEO0FBQUE7QUFBQTs7QUFBQTtBQUlqRCx5QkFBd0JRLEdBQXhCLDhIQUE2QjtBQUFBLFVBQWxCQyxTQUFrQjtBQUUzQixVQUFJLENBQUNULEtBQUssQ0FBQ1MsU0FBRCxDQUFWLEVBQXVCVCxLQUFLLENBQUNTLFNB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TCxDQUFtQkYsSUFBSSxDQUFDRSxNQUF4QixDQUFQO0FBRUQiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCBDaGFyQ291bnQgZnJvbSAnLi9pbnRlcmZhY2VzL0NoYXJDb3VudCc7XHJcblxyXG4vKipcclxuICogQ291bnQgdGhlIG51bWJlciBvZiBvY2N1cmFuY2VzIHRoYXQgYSBzdWJzdHJpbmcgaXMgZm91bmQgaW4gYSBzdHJpbmcuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBoYXlzdGFjayBUaGUgc3RyaW5nIHRvIHNlYXJjaCB0aHJvdWdoLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmVlZGxlIFRoZSBzdWJzdHJpbmcgdG8gc2VhcmNoIGZvci5cclxuICpcclxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyIG9mIHRpbWVzIHRoZSBzdWJzdHJpbmcgd2FzIGZvdW5kIGluIHRoZSBzdHJpbmcuXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiBcclxuICogY29uc3QgdGV4dCA9ICdoZWxsbyBoZWxsbyB3b3JsZCc7XHJcbiAqIFxyXG4gKiBjb25zdCBoZWxsb0NvdW50ID0gc3RyaW5nb3BzLmNvdW50KHRleHQsICdoZWxsbycpOyAvLyAyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY291bnQoaGF5c3RhY2s6IHN0cmluZywgbmVlZGxlOiBzdHJpbmcpOiBudW1iZXIge1xyXG5cclxuICBsZXQgY291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gIGxldCByZXN1bHRzOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgbGV0IGxhc3RJbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgd2hpbGUgKHJlc3VsdHMpIHtcclxuXHJcbiAgICBjb25zdCBpbmRleDogbnVtYmVyID0gaGF5c3RhY2suaW5kZXhPZihuZWVkbGUsIGxhc3RJbmRleCk7XHJcblxyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuXHJcbiAgICAgIGNvdW50Kys7XHJcblxyXG4gICAgICBsYXN0SW5kZXggPSBpbmRleCArIDE7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIHJlc3VsdHMgPSBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvdW50O1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIENvdW50cyB0aGUgbnVtYmVyIG9mIHRpbWVzIGVhY2ggY2hhcmFjdGVyIGFwcGVhcnMgaW4gdGhlIHN0cmluZy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGNvdW50IGNoYXJhY3RlcnMgb2YuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYW4gb2JqZWN0IHdpdGggZWFjaCBrZXkgYmVpbmcgYSBjaGFyYWN0ZXIgYW5kIHRoZSB2YWx1ZSBiZWluZyBpdHMgY291bnQuXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiBcclxuICogY29uc3QgdGV4dCA9ICdoZWxsbyB3b3JsZCc7XHJcbiAqIFxyXG4gKiBjb25zdCBjaGFyQ291bnQgPSBzdHJpbmdvcHMuY291bnRDaGFycyh0ZXh0KTsgLy8geyBoOiAxLCBlOiAxLCBsOiAzLCBvOiAyLCB3OiAxLCByOiAxLCBkOiAxIH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3VudENoYXJzKHN0cjogc3RyaW5nKTogQ2hhckNvdW50IHtcclxuXHJcbiAgY29uc3QgY291bnQ6IENoYXJDb3VudCA9IHt9O1xyXG5cclxuICBmb3IgKGNvbnN0IGNoYXJhY3RlciBvZiBzdHIpIHtcclxuXHJcbiAgICBpZiAoIWNvdW50W2NoYXJhY3Rlcl0pIGNvdW50W2NoYXJhY3Rlcl0gPSAwO1xyXG5cclxuICAgIGNvdW50W2NoYXJhY3Rlcl0rKztcclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gY291bnQ7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogRmluZCB0aGUgcG9zaXRpb24gb2YgdGhlIG50aCBvY2N1cmFuY2Ugb2YgYSBzdWJzdHJpbmcgaW4gYSBzdHJpbmcuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBzZWFyY2ggZm9yIHRoZSBzdWJzdHJpbmcuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdWIgVGhlIHN1YnN0cmluZyB0byBzZWFyaCBmb3IuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBvY2N1cmFuY2UgRGV0ZXJtaW5lcyB3aGljaCBvY2N1cmFuY2Ugb2YgdGhlIHN1YnN0cmluZyB3aWxsIGJlIHJldHVybmVkLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgc3Vic3RyaW5nLlxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogXHJcbiAqIGNvbnN0IHRleHQgPSAnaGVsbG8gaGVsbG8gd29ybGQnO1xyXG4gKiBcclxuICogY29uc3QgbnRoSW5kZXggPSBzdHJpbmdvcHMubnRoSW5kZXhPZih0ZXh0LCAnbCcsIDMpOyAvLyA3XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbnRoSW5kZXhPZihzdHI6IHN0cmluZywgc3ViOiBzdHJpbmcsIG9jY3VyYW5jZTogbnVtYmVyKTogKG51bWJlciB8IHVuZGVmaW5lZCkge1xyXG5cclxuICBsZXQgbGFzdEluZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9jY3VyYW5jZTsgaSsrKSB7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBzdHIuaW5kZXhPZihzdWIsIGxhc3RJbmRleCk7XHJcblxyXG4gICAgaWYgKGluZGV4ID09IC0xKSByZXR1cm47XHJcblxyXG4gICAgbGFzdEluZGV4ID0gaW5kZXggKyAxO1xyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiBsYXN0SW5kZXg7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgTGV2ZW5zaHRlaW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gc3RyaW5ncy5cclxuICpcclxuICogUmVmZXJlbmNlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9hbmRyZWktbS85ODI5MjdcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0cjEgVGhlIGZpcnN0IHN0cmluZy5cclxuICogQHBhcmFtIHtzdHJpbmd9IHN0cjIgVGhlIHNlY29uZCBzdHJpbmcuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlciBvZiBvcGVyYXRpb25zIHJlcXVpcmVkIHRvIG1hdGNoIHRoZSB0d28gc3RyaW5ncy5cclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqIFxyXG4gKiBjb25zdCBzdHIxID0gJ2Jvb2snO1xyXG4gKiBjb25zdCBzdHIyID0gJ2JlYXInO1xyXG4gKiBcclxuICogY29uc3QgbGV2ID0gc3RyaW5nb3BzLmxldmVuc2h0ZWluKHN0cjEsIHN0cjIpOyAvLyAzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGV2ZW5zaHRlaW4oc3RyMTogc3RyaW5nLCBzdHIyOiBzdHJpbmcpOiBudW1iZXIge1xyXG5cclxuICBpZiAoc3RyMS5sZW5ndGggPT0gMCkgcmV0dXJuIHN0cjIubGVuZ3RoO1xyXG4gIGlmIChzdHIyLmxlbmd0aCA9PSAwKSByZXR1cm4gc3RyMS5sZW5ndGg7XHJcblxyXG4gIGNvbnN0IHRhYmxlID0gW107XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IHN0cjIubGVuZ3RoOyArK2kpIHRhYmxlW2ldID0gW2ldO1xyXG5cclxuICBmb3IgKGxldCBqID0gMDsgaiA8PSBzdHIxLmxlbmd0aDsgKytqKSB0YWJsZVswXVtqXSA9IGo7XHJcblxyXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHN0cjIubGVuZ3RoOyArK2kpIHtcclxuXHJcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSBzdHIxLmxlbmd0aDsgKytqKSB7XHJcblxyXG4gICAgICBpZiAoc3RyMi5jaGFyQXQoaSAtIDEpID09IHN0cjEuY2hhckF0KGogLSAxKSkge1xyXG5cclxuICAgICAgICB0YWJsZVtpXVtqXSA9IHRhYmxlW2kgLSAxXVtqIC0gMV07XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICB0YWJsZVtpXVtqXSA9IFxyXG4gICAgICAgICAgTWF0aC5taW4oXHJcbiAgICAgICAgICAgIHRhYmxlW2kgLSAxXVtqIC0gMV0gKyAxLFxyXG4gICAgICAgICAgICBNYXRoLm1pbihcclxuICAgICAgICAgICAgICB0YWJsZVtpXVtqIC0gMV0gKyAxLFxyXG4gICAgICAgICAgICAgIHRhYmxlW2kgLSAxXVtqXSArIDFcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGFibGVbc3RyMi5sZW5ndGhdW3N0cjEubGVuZ3RoXTtcclxuXHJcbn1cclxuIl19