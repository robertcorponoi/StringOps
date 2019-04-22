'use strict';
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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.count = count;
exports.countChars = countChars;
exports.nthIndexOf = nthIndexOf;
exports.levenshtein = levenshtein;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maW5kLnRzIl0sIm5hbWVzIjpbImNvdW50IiwiaGF5c3RhY2siLCJuZWVkbGUiLCJyZXN1bHRzIiwibGFzdEluZGV4IiwiaW5kZXgiLCJpbmRleE9mIiwiY291bnRDaGFycyIsInN0ciIsIk9iamVjdCIsImNoYXJhY3RlciIsIm50aEluZGV4T2YiLCJzdWIiLCJvY2N1cmFuY2UiLCJpIiwibGV2ZW5zaHRlaW4iLCJzdHIxIiwic3RyMiIsImxlbmd0aCIsInRhYmxlIiwiaiIsImNoYXJBdCIsIk1hdGgiLCJtaW4iXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV08sU0FBU0EsS0FBVCxDQUFlQyxRQUFmLEVBQWlDQyxNQUFqQyxFQUF5RDtBQUU5RCxNQUFJRixLQUFhLEdBQUcsQ0FBcEI7QUFFQSxNQUFJRyxPQUFnQixHQUFHLElBQXZCO0FBRUEsTUFBSUMsU0FBaUIsR0FBRyxDQUF4Qjs7QUFFQSxTQUFPRCxPQUFQLEVBQWdCO0FBRWQsUUFBTUUsS0FBYSxHQUFHSixRQUFRLENBQUNLLE9BQVQsQ0FBaUJKLE1BQWpCLEVBQXlCRSxTQUF6QixDQUF0Qjs7QUFFQSxRQUFJQyxLQUFLLEdBQUcsQ0FBQyxDQUFiLEVBQWdCO0FBRWRMLE1BQUFBLEtBQUs7QUFFTEksTUFBQUEsU0FBUyxHQUFHQyxLQUFLLEdBQUcsQ0FBcEI7QUFFRCxLQU5ELE1BTU87QUFFTEYsTUFBQUEsT0FBTyxHQUFHLEtBQVY7QUFFRDtBQUVGOztBQUVELFNBQU9ILEtBQVA7QUFFRDtBQUVEOzs7Ozs7Ozs7OztBQVNPLFNBQVNPLFVBQVQsQ0FBb0JDLEdBQXBCLEVBQXNDO0FBRTNDLE1BQU1SLEtBQVUsR0FBRyxJQUFJUyxNQUFKLENBQVcsSUFBWCxDQUFuQjtBQUYyQztBQUFBO0FBQUE7O0FBQUE7QUFJM0MseUJBQXdCRCxHQUF4Qiw4SEFBNkI7QUFBQSxVQUFsQkUsU0FBa0I7QUFFM0IsVUFBSSxDQUFDVixLQUFLLENBQUNVLFNBQUQsQ0FB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QUNDLE1BQU4sQ0FBTCxDQUFtQkYsSUFBSSxDQUFDRSxNQUF4QixDQUFQO0FBRUQiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIG9jY3VyYW5jZXMgdGhhdCBhIHN1YnN0cmluZyBpcyBmb3VuZFxuICogaW4gYSBzdHJpbmcuXG4gKlxuICogQHZlcnNpb24gMC4xLjBcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaGF5c3RhY2sgVGhlIHN0cmluZyB0byBzZWFyY2ggdGhyb3VnaC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBuZWVkbGUgVGhlIHN1YnN0cmluZyB0byBzZWFyY2ggZm9yLlxuICpcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlciBvZiB0aW1lcyB0aGUgc3Vic3RyaW5nIHdhcyBmb3VuZCBpbiB0aGUgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY291bnQoaGF5c3RhY2s6IHN0cmluZywgbmVlZGxlOiBzdHJpbmcpOiBudW1iZXIge1xuXG4gIGxldCBjb3VudDogbnVtYmVyID0gMDtcblxuICBsZXQgcmVzdWx0czogYm9vbGVhbiA9IHRydWU7XG5cbiAgbGV0IGxhc3RJbmRleDogbnVtYmVyID0gMDtcblxuICB3aGlsZSAocmVzdWx0cykge1xuXG4gICAgY29uc3QgaW5kZXg6IG51bWJlciA9IGhheXN0YWNrLmluZGV4T2YobmVlZGxlLCBsYXN0SW5kZXgpO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcblxuICAgICAgY291bnQrKztcblxuICAgICAgbGFzdEluZGV4ID0gaW5kZXggKyAxO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgcmVzdWx0cyA9IGZhbHNlO1xuXG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gY291bnQ7XG5cbn1cblxuLyoqXG4gKiBDb3VudHMgdGhlIG51bWJlciBvZiB0aW1lcyBlYWNoIGNoYXJhY3RlciBhcHBlYXJzIGluIHRoZSBzdHJpbmcuXG4gKlxuICogQHZlcnNpb24gMC4xLjBcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gY291bnQgY2hhcmFjdGVycyBvZi5cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIGVhY2gga2V5IGJlaW5nIGEgY2hhcmFjdGVyIGFuZCB0aGUgdmFsdWUgYmVpbmcgaXRzIGNvdW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY291bnRDaGFycyhzdHI6IHN0cmluZyk6IGFueSB7XG5cbiAgY29uc3QgY291bnQ6IGFueSA9IG5ldyBPYmplY3QobnVsbCk7XG5cbiAgZm9yIChjb25zdCBjaGFyYWN0ZXIgb2Ygc3RyKSB7XG5cbiAgICBpZiAoIWNvdW50W2NoYXJhY3Rlcl0pIGNvdW50W2NoYXJhY3Rlcl0gPSAwO1xuXG4gICAgY291bnRbY2hhcmFjdGVyXSsrO1xuXG4gIH1cblxuICByZXR1cm4gY291bnQ7XG5cbn1cblxuLyoqXG4gKiBGaW5kIHRoZSBwb3NpdGlvbiBvZiB0aGUgbnRoIG9jY3VyYW5jZSBvZiBhIHN1YnN0cmluZyBpbiBhIHN0cmluZy5cbiAqXG4gKiBAdmVyc2lvbiAwLjEuMFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBzZWFyY2ggZm9yIHRoZSBzdWJzdHJpbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gc3ViIFRoZSBzdWJzdHJpbmcgdG8gc2VhcmggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IG9jY3VyYW5jZSBEZXRlcm1pbmVzIHdoaWNoIG9jY3VyYW5jZSBvZiB0aGUgc3Vic3RyaW5nIHdpbGwgYmUgcmV0dXJuZWQuXG4gKlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIHN1YnN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG50aEluZGV4T2Yoc3RyOiBzdHJpbmcsIHN1Yjogc3RyaW5nLCBvY2N1cmFuY2U6IG51bWJlcik6IChudW1iZXIgfCB1bmRlZmluZWQpIHtcblxuICBsZXQgbGFzdEluZGV4OiBudW1iZXIgPSAwO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb2NjdXJhbmNlOyBpKyspIHtcblxuICAgIGNvbnN0IGluZGV4ID0gc3RyLmluZGV4T2Yoc3ViLCBsYXN0SW5kZXgpO1xuXG4gICAgaWYgKGluZGV4ID09IC0xKSByZXR1cm47XG5cbiAgICBsYXN0SW5kZXggPSBpbmRleCArIDE7XG5cbiAgfVxuXG4gIHJldHVybiBsYXN0SW5kZXg7XG5cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBMZXZlbnNodGVpbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byBzdHJpbmdzLlxuICpcbiAqIFJlZmVyZW5jZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vYW5kcmVpLW0vOTgyOTI3XG4gKlxuICogQHZlcnNpb24gMC4xLjBcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyMSBUaGUgZmlyc3Qgc3RyaW5nLlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cjIgVGhlIHNlY29uZCBzdHJpbmcuXG4gKlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyIG9mIG9wZXJhdGlvbnMgcmVxdWlyZWQgdG8gbWF0Y2ggdGhlIHR3byBzdHJpbmdzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbGV2ZW5zaHRlaW4oc3RyMTogc3RyaW5nLCBzdHIyOiBzdHJpbmcpOiBudW1iZXIge1xuXG4gIGlmIChzdHIxLmxlbmd0aCA9PSAwKSByZXR1cm4gc3RyMi5sZW5ndGg7XG4gIGlmIChzdHIyLmxlbmd0aCA9PSAwKSByZXR1cm4gc3RyMS5sZW5ndGg7XG5cbiAgY29uc3QgdGFibGUgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8PSBzdHIyLmxlbmd0aDsgKytpKSB0YWJsZVtpXSA9IFtpXTtcblxuICBmb3IgKGxldCBqID0gMDsgaiA8PSBzdHIxLmxlbmd0aDsgKytqKSB0YWJsZVswXVtqXSA9IGo7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc3RyMi5sZW5ndGg7ICsraSkge1xuXG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gc3RyMS5sZW5ndGg7ICsraikge1xuXG4gICAgICBpZiAoc3RyMi5jaGFyQXQoaSAtIDEpID09IHN0cjEuY2hhckF0KGogLSAxKSkge1xuXG4gICAgICAgIHRhYmxlW2ldW2pdID0gdGFibGVbaSAtIDFdW2ogLSAxXTtcblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICB0YWJsZVtpXVtqXSA9IFxuICAgICAgICAgIE1hdGgubWluKFxuICAgICAgICAgICAgdGFibGVbaSAtIDFdW2ogLSAxXSArIDEsXG4gICAgICAgICAgICBNYXRoLm1pbihcbiAgICAgICAgICAgICAgdGFibGVbaV1baiAtIDFdICsgMSxcbiAgICAgICAgICAgICAgdGFibGVbaSAtIDFdW2pdICsgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcblxuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gdGFibGVbc3RyMi5sZW5ndGhdW3N0cjEubGVuZ3RoXTtcblxufVxuIl19