'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.count = count;
exports.countChars = countChars;
exports.nthIndexOf = nthIndexOf;
exports.levenshtein = levenshtein;
exports.isAlnum = isAlnum;
exports.isAlpha = isAlpha;

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
/**
 * Checks to see if all of the characters in the text are alphanumeric.
 * 
 * Source: Python - isalnum
 * 
 * @param {string} str The string to search.
 * 
 * @returns {boolean} Returns true if all of the characters in the text are alphanumeric or false otherwise.
 */


function isAlnum(str) {
  var allowedCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < str.length; ++i) {
    var _char = str.charAt(i);

    if (allowedCharacters.indexOf(_char) < 0) return false;
  }

  return true;
}
/**
 * Checks to see if all of the characters in the text are letters.
 * 
 * Source: Python - isalpha
 * 
 * @param {string} str The string to search.
 * 
 * @returns {boolean} Returns true if all of the characters in the text are letters or false otherwise.
 */


function isAlpha(str) {
  var allowedCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < str.length; ++i) {
    var _char2 = str.charAt(i);

    if (allowedCharacters.indexOf(_char2) < 0) return false;
  }

  return true;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maW5kLnRzIl0sIm5hbWVzIjpbImNvdW50IiwiaGF5c3RhY2siLCJuZWVkbGUiLCJyZXN1bHRzIiwibGFzdEluZGV4IiwiaW5kZXgiLCJpbmRleE9mIiwiY291bnRDaGFycyIsInN0ciIsImNoYXJhY3RlciIsIm50aEluZGV4T2YiLCJzdWIiLCJvY2N1cmFuY2UiLCJpIiwibGV2ZW5zaHRlaW4iLCJzdHIxIiwic3RyMiIsImxlbmd0aCIsInRhYmxlIiwiaiIsImNoYXJBdCIsIk1hdGgiLCJtaW4iLCJpc0FsbnVtIiwiYWxsb3dlZENoYXJhY3RlcnMiLCJjaGFyIiwiaXNBbHBoYSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUlBOzs7Ozs7Ozs7Ozs7OztBQWNPLFNBQVNBLEtBQVQsQ0FBZUMsUUFBZixFQUFpQ0MsTUFBakMsRUFBeUQ7QUFDOUQsTUFBSUYsS0FBYSxHQUFHLENBQXBCO0FBRUEsTUFBSUcsT0FBZ0IsR0FBRyxJQUF2QjtBQUVBLE1BQUlDLFNBQWlCLEdBQUcsQ0FBeEI7O0FBRUEsU0FBT0QsT0FBUCxFQUFnQjtBQUNkLFFBQU1FLEtBQWEsR0FBR0osUUFBUSxDQUFDSyxPQUFULENBQWlCSixNQUFqQixFQUF5QkUsU0FBekIsQ0FBdEI7O0FBRUEsUUFBSUMsS0FBSyxHQUFHLENBQUMsQ0FBYixFQUFnQjtBQUNkTCxNQUFBQSxLQUFLO0FBRUxJLE1BQUFBLFNBQVMsR0FBR0MsS0FBSyxHQUFHLENBQXBCO0FBQ0QsS0FKRCxNQUlPO0FBQ0xGLE1BQUFBLE9BQU8sR0FBRyxLQUFWO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPSCxLQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7O0FBYU8sU0FBU08sVUFBVCxDQUFvQkMsR0FBcEIsRUFBNEM7QUFDakQsTUFBTVIsS0FBZ0IsR0FBRyxFQUF6QjtBQURpRDtBQUFBO0FBQUE7O0FBQUE7QUFHakQseUJBQXdCUSxHQUF4Qiw4SEFBNkI7QUFBQSxVQUFsQkMsU0FBa0I7QUFDM0IsVUFB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RjtBQUNGOztBQUVELFNBQU9ELEtBQUssQ0FBQ0YsSUFBSSxDQUFDQyxNQUFOLENBQUwsQ0FBbUJGLElBQUksQ0FBQ0UsTUFBeEIsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7O0FBU08sU0FBU00sT0FBVCxDQUFpQmYsR0FBakIsRUFBdUM7QUFDNUMsTUFBTWdCLGlCQUF5QixHQUFHLGdFQUFsQzs7QUFFQSxPQUFLLElBQUlYLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdMLEdBQUcsQ0FBQ1MsTUFBeEIsRUFBZ0MsRUFBRUosQ0FBbEMsRUFBcUM7QUFDbkMsUUFBTVksS0FBWSxHQUFHakIsR0FBRyxDQUFDWSxNQUFKLENBQVdQLENBQVgsQ0FBckI7O0FBRUEsUUFBSVcsaUJBQWlCLENBQUNsQixPQUFsQixDQUEwQm1CLEtBQTFCLElBQWtDLENBQXRDLEVBQXlDLE9BQU8sS0FBUDtBQUMxQzs7QUFFRCxTQUFPLElBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7OztBQVNPLFNBQVNDLE9BQVQsQ0FBaUJsQixHQUFqQixFQUF1QztBQUM1QyxNQUFNZ0IsaUJBQXlCLEdBQUcsc0RBQWxDOztBQUVBLE9BQUssSUFBSVgsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0wsR0FBRyxDQUFDUyxNQUF4QixFQUFnQyxFQUFFSixDQUFsQyxFQUFxQztBQUNuQyxRQUFNWSxNQUFZLEdBQUdqQixHQUFHLENBQUNZLE1BQUosQ0FBV1AsQ0FBWCxDQUFyQjs7QUFFQSxRQUFJVyxpQkFBaUIsQ0FBQ2xCLE9BQWxCLENBQTBCbUIsTUFBMUIsSUFBa0MsQ0FBdEMsRUFBeUMsT0FBTyxLQUFQO0FBQzFDOztBQUVELFNBQU8sSUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgQ2hhckNvdW50IGZyb20gJy4vaW50ZXJmYWNlcy9DaGFyQ291bnQnO1xyXG5cclxuLyoqXHJcbiAqIENvdW50IHRoZSBudW1iZXIgb2Ygb2NjdXJhbmNlcyB0aGF0IGEgc3Vic3RyaW5nIGlzIGZvdW5kIGluIGEgc3RyaW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaGF5c3RhY2sgVGhlIHN0cmluZyB0byBzZWFyY2ggdGhyb3VnaC5cclxuICogQHBhcmFtIHtzdHJpbmd9IG5lZWRsZSBUaGUgc3Vic3RyaW5nIHRvIHNlYXJjaCBmb3IuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlciBvZiB0aW1lcyB0aGUgc3Vic3RyaW5nIHdhcyBmb3VuZCBpbiB0aGUgc3RyaW5nLlxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogXHJcbiAqIGNvbnN0IHRleHQgPSAnaGVsbG8gaGVsbG8gd29ybGQnO1xyXG4gKiBcclxuICogY29uc3QgaGVsbG9Db3VudCA9IHN0cmluZ29wcy5jb3VudCh0ZXh0LCAnaGVsbG8nKTsgLy8gMlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50KGhheXN0YWNrOiBzdHJpbmcsIG5lZWRsZTogc3RyaW5nKTogbnVtYmVyIHtcclxuICBsZXQgY291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gIGxldCByZXN1bHRzOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgbGV0IGxhc3RJbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgd2hpbGUgKHJlc3VsdHMpIHtcclxuICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSBoYXlzdGFjay5pbmRleE9mKG5lZWRsZSwgbGFzdEluZGV4KTtcclxuXHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICBjb3VudCsrO1xyXG5cclxuICAgICAgbGFzdEluZGV4ID0gaW5kZXggKyAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0cyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvdW50O1xyXG59XHJcblxyXG4vKipcclxuICogQ291bnRzIHRoZSBudW1iZXIgb2YgdGltZXMgZWFjaCBjaGFyYWN0ZXIgYXBwZWFycyBpbiB0aGUgc3RyaW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gY291bnQgY2hhcmFjdGVycyBvZi5cclxuICpcclxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBhbiBvYmplY3Qgd2l0aCBlYWNoIGtleSBiZWluZyBhIGNoYXJhY3RlciBhbmQgdGhlIHZhbHVlIGJlaW5nIGl0cyBjb3VudC5cclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqIFxyXG4gKiBjb25zdCB0ZXh0ID0gJ2hlbGxvIHdvcmxkJztcclxuICogXHJcbiAqIGNvbnN0IGNoYXJDb3VudCA9IHN0cmluZ29wcy5jb3VudENoYXJzKHRleHQpOyAvLyB7IGg6IDEsIGU6IDEsIGw6IDMsIG86IDIsIHc6IDEsIHI6IDEsIGQ6IDEgfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50Q2hhcnMoc3RyOiBzdHJpbmcpOiBDaGFyQ291bnQge1xyXG4gIGNvbnN0IGNvdW50OiBDaGFyQ291bnQgPSB7fTtcclxuXHJcbiAgZm9yIChjb25zdCBjaGFyYWN0ZXIgb2Ygc3RyKSB7XHJcbiAgICBpZiAoIWNvdW50W2NoYXJhY3Rlcl0pIGNvdW50W2NoYXJhY3Rlcl0gPSAwO1xyXG5cclxuICAgIGNvdW50W2NoYXJhY3Rlcl0rKztcclxuICB9XHJcblxyXG4gIHJldHVybiBjb3VudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbmQgdGhlIHBvc2l0aW9uIG9mIHRoZSBudGggb2NjdXJhbmNlIG9mIGEgc3Vic3RyaW5nIGluIGEgc3RyaW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gc2VhcmNoIGZvciB0aGUgc3Vic3RyaW5nLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3ViIFRoZSBzdWJzdHJpbmcgdG8gc2VhcmggZm9yLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gb2NjdXJhbmNlIERldGVybWluZXMgd2hpY2ggb2NjdXJhbmNlIG9mIHRoZSBzdWJzdHJpbmcgd2lsbCBiZSByZXR1cm5lZC5cclxuICpcclxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIHN1YnN0cmluZy5cclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqIFxyXG4gKiBjb25zdCB0ZXh0ID0gJ2hlbGxvIGhlbGxvIHdvcmxkJztcclxuICogXHJcbiAqIGNvbnN0IG50aEluZGV4ID0gc3RyaW5nb3BzLm50aEluZGV4T2YodGV4dCwgJ2wnLCAzKTsgLy8gN1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG50aEluZGV4T2Yoc3RyOiBzdHJpbmcsIHN1Yjogc3RyaW5nLCBvY2N1cmFuY2U6IG51bWJlcik6IChudW1iZXIgfCB1bmRlZmluZWQpIHtcclxuICBsZXQgbGFzdEluZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9jY3VyYW5jZTsgaSsrKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHN0ci5pbmRleE9mKHN1YiwgbGFzdEluZGV4KTtcclxuXHJcbiAgICBpZiAoaW5kZXggPT0gLTEpIHJldHVybjtcclxuXHJcbiAgICBsYXN0SW5kZXggPSBpbmRleCArIDE7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbGFzdEluZGV4O1xyXG59XHJcblxyXG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgTGV2ZW5zaHRlaW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gc3RyaW5ncy5cclxuICpcclxuICogUmVmZXJlbmNlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9hbmRyZWktbS85ODI5MjdcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0cjEgVGhlIGZpcnN0IHN0cmluZy5cclxuICogQHBhcmFtIHtzdHJpbmd9IHN0cjIgVGhlIHNlY29uZCBzdHJpbmcuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlciBvZiBvcGVyYXRpb25zIHJlcXVpcmVkIHRvIG1hdGNoIHRoZSB0d28gc3RyaW5ncy5cclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqIFxyXG4gKiBjb25zdCBzdHIxID0gJ2Jvb2snO1xyXG4gKiBjb25zdCBzdHIyID0gJ2JlYXInO1xyXG4gKiBcclxuICogY29uc3QgbGV2ID0gc3RyaW5nb3BzLmxldmVuc2h0ZWluKHN0cjEsIHN0cjIpOyAvLyAzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGV2ZW5zaHRlaW4oc3RyMTogc3RyaW5nLCBzdHIyOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gIGlmIChzdHIxLmxlbmd0aCA9PSAwKSByZXR1cm4gc3RyMi5sZW5ndGg7XHJcbiAgaWYgKHN0cjIubGVuZ3RoID09IDApIHJldHVybiBzdHIxLmxlbmd0aDtcclxuXHJcbiAgY29uc3QgdGFibGUgPSBbXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gc3RyMi5sZW5ndGg7ICsraSkgdGFibGVbaV0gPSBbaV07XHJcblxyXG4gIGZvciAobGV0IGogPSAwOyBqIDw9IHN0cjEubGVuZ3RoOyArK2opIHRhYmxlWzBdW2pdID0gajtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc3RyMi5sZW5ndGg7ICsraSkge1xyXG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gc3RyMS5sZW5ndGg7ICsraikge1xyXG4gICAgICBpZiAoc3RyMi5jaGFyQXQoaSAtIDEpID09IHN0cjEuY2hhckF0KGogLSAxKSkge1xyXG4gICAgICAgIHRhYmxlW2ldW2pdID0gdGFibGVbaSAtIDFdW2ogLSAxXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0YWJsZVtpXVtqXSA9IFxyXG4gICAgICAgICAgTWF0aC5taW4oXHJcbiAgICAgICAgICAgIHRhYmxlW2kgLSAxXVtqIC0gMV0gKyAxLFxyXG4gICAgICAgICAgICBNYXRoLm1pbihcclxuICAgICAgICAgICAgICB0YWJsZVtpXVtqIC0gMV0gKyAxLFxyXG4gICAgICAgICAgICAgIHRhYmxlW2kgLSAxXVtqXSArIDFcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGFibGVbc3RyMi5sZW5ndGhdW3N0cjEubGVuZ3RoXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrcyB0byBzZWUgaWYgYWxsIG9mIHRoZSBjaGFyYWN0ZXJzIGluIHRoZSB0ZXh0IGFyZSBhbHBoYW51bWVyaWMuXHJcbiAqIFxyXG4gKiBTb3VyY2U6IFB5dGhvbiAtIGlzYWxudW1cclxuICogXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBzZWFyY2guXHJcbiAqIFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGFsbCBvZiB0aGUgY2hhcmFjdGVycyBpbiB0aGUgdGV4dCBhcmUgYWxwaGFudW1lcmljIG9yIGZhbHNlIG90aGVyd2lzZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FsbnVtKHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgYWxsb3dlZENoYXJhY3RlcnM6IHN0cmluZyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XHJcbiAgICBjb25zdCBjaGFyOiBzdHJpbmcgPSBzdHIuY2hhckF0KGkpO1xyXG5cclxuICAgIGlmIChhbGxvd2VkQ2hhcmFjdGVycy5pbmRleE9mKGNoYXIpIDwgMCkgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgdG8gc2VlIGlmIGFsbCBvZiB0aGUgY2hhcmFjdGVycyBpbiB0aGUgdGV4dCBhcmUgbGV0dGVycy5cclxuICogXHJcbiAqIFNvdXJjZTogUHl0aG9uIC0gaXNhbHBoYVxyXG4gKiBcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHNlYXJjaC5cclxuICogXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgYWxsIG9mIHRoZSBjaGFyYWN0ZXJzIGluIHRoZSB0ZXh0IGFyZSBsZXR0ZXJzIG9yIGZhbHNlIG90aGVyd2lzZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FscGhhKHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgYWxsb3dlZENoYXJhY3RlcnM6IHN0cmluZyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JztcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcclxuICAgIGNvbnN0IGNoYXI6IHN0cmluZyA9IHN0ci5jaGFyQXQoaSk7XHJcblxyXG4gICAgaWYgKGFsbG93ZWRDaGFyYWN0ZXJzLmluZGV4T2YoY2hhcikgPCAwKSByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG4iXX0=