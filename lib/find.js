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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maW5kLnRzIl0sIm5hbWVzIjpbImNvdW50IiwiaGF5c3RhY2siLCJuZWVkbGUiLCJyZXN1bHRzIiwibGFzdEluZGV4IiwiaW5kZXgiLCJpbmRleE9mIiwiY291bnRDaGFycyIsInN0ciIsIk9iamVjdCIsImNoYXJhY3RlciIsIm50aEluZGV4T2YiLCJzdWIiLCJvY2N1cmFuY2UiLCJpIiwibGV2ZW5zaHRlaW4iLCJzdHIxIiwic3RyMiIsImxlbmd0aCIsInRhYmxlIiwiaiIsImNoYXJBdCIsIk1hdGgiLCJtaW4iXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV08sU0FBU0EsS0FBVCxDQUFlQyxRQUFmLEVBQWlDQyxNQUFqQyxFQUF5RDtBQUU5RCxNQUFJRixLQUFhLEdBQUcsQ0FBcEI7QUFFQSxNQUFJRyxPQUFnQixHQUFHLElBQXZCO0FBRUEsTUFBSUMsU0FBaUIsR0FBRyxDQUF4Qjs7QUFFQSxTQUFPRCxPQUFQLEVBQWdCO0FBRWQsUUFBTUUsS0FBYSxHQUFHSixRQUFRLENBQUNLLE9BQVQsQ0FBaUJKLE1BQWpCLEVBQXlCRSxTQUF6QixDQUF0Qjs7QUFFQSxRQUFJQyxLQUFLLEdBQUcsQ0FBQyxDQUFiLEVBQWdCO0FBRWRMLE1BQUFBLEtBQUs7QUFFTEksTUFBQUEsU0FBUyxHQUFHQyxLQUFLLEdBQUcsQ0FBcEI7QUFFRCxLQU5ELE1BTU87QUFFTEYsTUFBQUEsT0FBTyxHQUFHLEtBQVY7QUFFRDtBQUVGOztBQUVELFNBQU9ILEtBQVA7QUFFRDtBQUVEOzs7Ozs7Ozs7OztBQVNPLFNBQVNPLFVBQVQsQ0FBb0JDLEdBQXBCLEVBQXNDO0FBRTNDLE1BQU1SLEtBQVUsR0FBRyxJQUFJUyxNQUFKLENBQVcsSUFBWCxDQUFuQjtBQUYyQztBQUFBO0FBQUE7O0FBQUE7QUFJM0MseUJBQXdCRCxHQUF4Qiw4SEFBNkI7QUFBQSxVQUFsQkUsU0FBa0I7QUFFM0IsVUFBSSxDQUFDVixLQUFLLENBQUNVLFNBQUQsQ0FB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QUNDLE1BQU4sQ0FBTCxDQUFtQkYsSUFBSSxDQUFDRSxNQUF4QixDQUFQO0FBRUQiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbi8qKlxyXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIG9jY3VyYW5jZXMgdGhhdCBhIHN1YnN0cmluZyBpcyBmb3VuZFxyXG4gKiBpbiBhIHN0cmluZy5cclxuICpcclxuICogQHZlcnNpb24gMC4xLjBcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGhheXN0YWNrIFRoZSBzdHJpbmcgdG8gc2VhcmNoIHRocm91Z2guXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuZWVkbGUgVGhlIHN1YnN0cmluZyB0byBzZWFyY2ggZm9yLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIgb2YgdGltZXMgdGhlIHN1YnN0cmluZyB3YXMgZm91bmQgaW4gdGhlIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3VudChoYXlzdGFjazogc3RyaW5nLCBuZWVkbGU6IHN0cmluZyk6IG51bWJlciB7XHJcblxyXG4gIGxldCBjb3VudDogbnVtYmVyID0gMDtcclxuXHJcbiAgbGV0IHJlc3VsdHM6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBsZXQgbGFzdEluZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICB3aGlsZSAocmVzdWx0cykge1xyXG5cclxuICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSBoYXlzdGFjay5pbmRleE9mKG5lZWRsZSwgbGFzdEluZGV4KTtcclxuXHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG5cclxuICAgICAgY291bnQrKztcclxuXHJcbiAgICAgIGxhc3RJbmRleCA9IGluZGV4ICsgMTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgcmVzdWx0cyA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gY291bnQ7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQ291bnRzIHRoZSBudW1iZXIgb2YgdGltZXMgZWFjaCBjaGFyYWN0ZXIgYXBwZWFycyBpbiB0aGUgc3RyaW5nLlxyXG4gKlxyXG4gKiBAdmVyc2lvbiAwLjEuMFxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gY291bnQgY2hhcmFjdGVycyBvZi5cclxuICpcclxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBhbiBvYmplY3Qgd2l0aCBlYWNoIGtleSBiZWluZyBhIGNoYXJhY3RlciBhbmQgdGhlIHZhbHVlIGJlaW5nIGl0cyBjb3VudC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3VudENoYXJzKHN0cjogc3RyaW5nKTogYW55IHtcclxuXHJcbiAgY29uc3QgY291bnQ6IGFueSA9IG5ldyBPYmplY3QobnVsbCk7XHJcblxyXG4gIGZvciAoY29uc3QgY2hhcmFjdGVyIG9mIHN0cikge1xyXG5cclxuICAgIGlmICghY291bnRbY2hhcmFjdGVyXSkgY291bnRbY2hhcmFjdGVyXSA9IDA7XHJcblxyXG4gICAgY291bnRbY2hhcmFjdGVyXSsrO1xyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiBjb3VudDtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaW5kIHRoZSBwb3NpdGlvbiBvZiB0aGUgbnRoIG9jY3VyYW5jZSBvZiBhIHN1YnN0cmluZyBpbiBhIHN0cmluZy5cclxuICpcclxuICogQHZlcnNpb24gMC4xLjBcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHNlYXJjaCBmb3IgdGhlIHN1YnN0cmluZy5cclxuICogQHBhcmFtIHtzdHJpbmd9IHN1YiBUaGUgc3Vic3RyaW5nIHRvIHNlYXJoIGZvci5cclxuICogQHBhcmFtIHtudW1iZXJ9IG9jY3VyYW5jZSBEZXRlcm1pbmVzIHdoaWNoIG9jY3VyYW5jZSBvZiB0aGUgc3Vic3RyaW5nIHdpbGwgYmUgcmV0dXJuZWQuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBzdWJzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbnRoSW5kZXhPZihzdHI6IHN0cmluZywgc3ViOiBzdHJpbmcsIG9jY3VyYW5jZTogbnVtYmVyKTogKG51bWJlciB8IHVuZGVmaW5lZCkge1xyXG5cclxuICBsZXQgbGFzdEluZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9jY3VyYW5jZTsgaSsrKSB7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBzdHIuaW5kZXhPZihzdWIsIGxhc3RJbmRleCk7XHJcblxyXG4gICAgaWYgKGluZGV4ID09IC0xKSByZXR1cm47XHJcblxyXG4gICAgbGFzdEluZGV4ID0gaW5kZXggKyAxO1xyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiBsYXN0SW5kZXg7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgTGV2ZW5zaHRlaW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gc3RyaW5ncy5cclxuICpcclxuICogUmVmZXJlbmNlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9hbmRyZWktbS85ODI5MjdcclxuICpcclxuICogQHZlcnNpb24gMC4xLjBcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0cjEgVGhlIGZpcnN0IHN0cmluZy5cclxuICogQHBhcmFtIHtzdHJpbmd9IHN0cjIgVGhlIHNlY29uZCBzdHJpbmcuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlciBvZiBvcGVyYXRpb25zIHJlcXVpcmVkIHRvIG1hdGNoIHRoZSB0d28gc3RyaW5ncy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsZXZlbnNodGVpbihzdHIxOiBzdHJpbmcsIHN0cjI6IHN0cmluZyk6IG51bWJlciB7XHJcblxyXG4gIGlmIChzdHIxLmxlbmd0aCA9PSAwKSByZXR1cm4gc3RyMi5sZW5ndGg7XHJcbiAgaWYgKHN0cjIubGVuZ3RoID09IDApIHJldHVybiBzdHIxLmxlbmd0aDtcclxuXHJcbiAgY29uc3QgdGFibGUgPSBbXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gc3RyMi5sZW5ndGg7ICsraSkgdGFibGVbaV0gPSBbaV07XHJcblxyXG4gIGZvciAobGV0IGogPSAwOyBqIDw9IHN0cjEubGVuZ3RoOyArK2opIHRhYmxlWzBdW2pdID0gajtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc3RyMi5sZW5ndGg7ICsraSkge1xyXG5cclxuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IHN0cjEubGVuZ3RoOyArK2opIHtcclxuXHJcbiAgICAgIGlmIChzdHIyLmNoYXJBdChpIC0gMSkgPT0gc3RyMS5jaGFyQXQoaiAtIDEpKSB7XHJcblxyXG4gICAgICAgIHRhYmxlW2ldW2pdID0gdGFibGVbaSAtIDFdW2ogLSAxXTtcclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHRhYmxlW2ldW2pdID0gXHJcbiAgICAgICAgICBNYXRoLm1pbihcclxuICAgICAgICAgICAgdGFibGVbaSAtIDFdW2ogLSAxXSArIDEsXHJcbiAgICAgICAgICAgIE1hdGgubWluKFxyXG4gICAgICAgICAgICAgIHRhYmxlW2ldW2ogLSAxXSArIDEsXHJcbiAgICAgICAgICAgICAgdGFibGVbaSAtIDFdW2pdICsgMVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApXHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiB0YWJsZVtzdHIyLmxlbmd0aF1bc3RyMS5sZW5ndGhdO1xyXG5cclxufVxyXG4iXX0=