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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maW5kLnRzIl0sIm5hbWVzIjpbImNvdW50IiwiaGF5c3RhY2siLCJuZWVkbGUiLCJyZXN1bHRzIiwibGFzdEluZGV4IiwiaW5kZXgiLCJpbmRleE9mIiwiY291bnRDaGFycyIsInN0ciIsImNoYXJhY3RlciIsIm50aEluZGV4T2YiLCJzdWIiLCJvY2N1cmFuY2UiLCJpIiwibGV2ZW5zaHRlaW4iLCJzdHIxIiwic3RyMiIsImxlbmd0aCIsInRhYmxlIiwiaiIsImNoYXJBdCIsIk1hdGgiLCJtaW4iLCJpc0FsbnVtIiwiYWxsb3dlZENoYXJhY3RlcnMiLCJjaGFyIiwiaXNBbHBoYSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUlBOzs7Ozs7Ozs7Ozs7OztBQWNPLFNBQVNBLEtBQVQsQ0FBZUMsUUFBZixFQUFpQ0MsTUFBakMsRUFBeUQ7QUFFOUQsTUFBSUYsS0FBYSxHQUFHLENBQXBCO0FBRUEsTUFBSUcsT0FBZ0IsR0FBRyxJQUF2QjtBQUVBLE1BQUlDLFNBQWlCLEdBQUcsQ0FBeEI7O0FBRUEsU0FBT0QsT0FBUCxFQUFnQjtBQUVkLFFBQU1FLEtBQWEsR0FBR0osUUFBUSxDQUFDSyxPQUFULENBQWlCSixNQUFqQixFQUF5QkUsU0FBekIsQ0FBdEI7O0FBRUEsUUFBSUMsS0FBSyxHQUFHLENBQUMsQ0FBYixFQUFnQjtBQUVkTCxNQUFBQSxLQUFLO0FBRUxJLE1BQUFBLFNBQVMsR0FBR0MsS0FBSyxHQUFHLENBQXBCO0FBRUQsS0FORCxNQU1PO0FBRUxGLE1BQUFBLE9BQU8sR0FBRyxLQUFWO0FBRUQ7QUFFRjs7QUFFRCxTQUFPSCxLQUFQO0FBRUQ7QUFFRDs7Ozs7Ozs7Ozs7Ozs7O0FBYU8sU0FBU08sVUFBVCxDQUFvQkMsR0FBcEIsRUFBNEM7QUFFakQsTUFBTVIsS0FBZ0IsR0FBRyxFQUF6QjtBQUZpRDtBQUFBO0FBQUE7O0FBQUE7QUFJakQseUJBQXdCUSxHQUF4Qiw4SEFBNkI7QUFBQSxVQUFsQkMsU0FBa0I7QUFFM0IsVUFB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RjtBQUVGOztBQUVELFNBQU9ELEtBQUssQ0FBQ0YsSUFBSSxDQUFDQyxNQUFOLENBQUwsQ0FBbUJGLElBQUksQ0FBQ0UsTUFBeEIsQ0FBUDtBQUVEO0FBRUQ7Ozs7Ozs7Ozs7O0FBU08sU0FBU00sT0FBVCxDQUFpQmYsR0FBakIsRUFBdUM7QUFFNUMsTUFBTWdCLGlCQUF5QixHQUFHLGdFQUFsQzs7QUFFQSxPQUFLLElBQUlYLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdMLEdBQUcsQ0FBQ1MsTUFBeEIsRUFBZ0MsRUFBRUosQ0FBbEMsRUFBcUM7QUFFbkMsUUFBTVksS0FBWSxHQUFHakIsR0FBRyxDQUFDWSxNQUFKLENBQVdQLENBQVgsQ0FBckI7O0FBRUEsUUFBSVcsaUJBQWlCLENBQUNsQixPQUFsQixDQUEwQm1CLEtBQTFCLElBQWtDLENBQXRDLEVBQXlDLE9BQU8sS0FBUDtBQUUxQzs7QUFFRCxTQUFPLElBQVA7QUFFRDtBQUVEOzs7Ozs7Ozs7OztBQVNPLFNBQVNDLE9BQVQsQ0FBaUJsQixHQUFqQixFQUF1QztBQUU1QyxNQUFNZ0IsaUJBQXlCLEdBQUcsc0RBQWxDOztBQUVBLE9BQUssSUFBSVgsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0wsR0FBRyxDQUFDUyxNQUF4QixFQUFnQyxFQUFFSixDQUFsQyxFQUFxQztBQUVuQyxRQUFNWSxNQUFZLEdBQUdqQixHQUFHLENBQUNZLE1BQUosQ0FBV1AsQ0FBWCxDQUFyQjs7QUFFQSxRQUFJVyxpQkFBaUIsQ0FBQ2xCLE9BQWxCLENBQTBCbUIsTUFBMUIsSUFBa0MsQ0FBdEMsRUFBeUMsT0FBTyxLQUFQO0FBRTFDOztBQUVELFNBQU8sSUFBUDtBQUVEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgQ2hhckNvdW50IGZyb20gJy4vaW50ZXJmYWNlcy9DaGFyQ291bnQnO1xyXG5cclxuLyoqXHJcbiAqIENvdW50IHRoZSBudW1iZXIgb2Ygb2NjdXJhbmNlcyB0aGF0IGEgc3Vic3RyaW5nIGlzIGZvdW5kIGluIGEgc3RyaW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaGF5c3RhY2sgVGhlIHN0cmluZyB0byBzZWFyY2ggdGhyb3VnaC5cclxuICogQHBhcmFtIHtzdHJpbmd9IG5lZWRsZSBUaGUgc3Vic3RyaW5nIHRvIHNlYXJjaCBmb3IuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlciBvZiB0aW1lcyB0aGUgc3Vic3RyaW5nIHdhcyBmb3VuZCBpbiB0aGUgc3RyaW5nLlxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogXHJcbiAqIGNvbnN0IHRleHQgPSAnaGVsbG8gaGVsbG8gd29ybGQnO1xyXG4gKiBcclxuICogY29uc3QgaGVsbG9Db3VudCA9IHN0cmluZ29wcy5jb3VudCh0ZXh0LCAnaGVsbG8nKTsgLy8gMlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50KGhheXN0YWNrOiBzdHJpbmcsIG5lZWRsZTogc3RyaW5nKTogbnVtYmVyIHtcclxuXHJcbiAgbGV0IGNvdW50OiBudW1iZXIgPSAwO1xyXG5cclxuICBsZXQgcmVzdWx0czogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGxldCBsYXN0SW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gIHdoaWxlIChyZXN1bHRzKSB7XHJcblxyXG4gICAgY29uc3QgaW5kZXg6IG51bWJlciA9IGhheXN0YWNrLmluZGV4T2YobmVlZGxlLCBsYXN0SW5kZXgpO1xyXG5cclxuICAgIGlmIChpbmRleCA+IC0xKSB7XHJcblxyXG4gICAgICBjb3VudCsrO1xyXG5cclxuICAgICAgbGFzdEluZGV4ID0gaW5kZXggKyAxO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICByZXN1bHRzID0gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiBjb3VudDtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb3VudHMgdGhlIG51bWJlciBvZiB0aW1lcyBlYWNoIGNoYXJhY3RlciBhcHBlYXJzIGluIHRoZSBzdHJpbmcuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBjb3VudCBjaGFyYWN0ZXJzIG9mLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIGVhY2gga2V5IGJlaW5nIGEgY2hhcmFjdGVyIGFuZCB0aGUgdmFsdWUgYmVpbmcgaXRzIGNvdW50LlxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogXHJcbiAqIGNvbnN0IHRleHQgPSAnaGVsbG8gd29ybGQnO1xyXG4gKiBcclxuICogY29uc3QgY2hhckNvdW50ID0gc3RyaW5nb3BzLmNvdW50Q2hhcnModGV4dCk7IC8vIHsgaDogMSwgZTogMSwgbDogMywgbzogMiwgdzogMSwgcjogMSwgZDogMSB9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY291bnRDaGFycyhzdHI6IHN0cmluZyk6IENoYXJDb3VudCB7XHJcblxyXG4gIGNvbnN0IGNvdW50OiBDaGFyQ291bnQgPSB7fTtcclxuXHJcbiAgZm9yIChjb25zdCBjaGFyYWN0ZXIgb2Ygc3RyKSB7XHJcblxyXG4gICAgaWYgKCFjb3VudFtjaGFyYWN0ZXJdKSBjb3VudFtjaGFyYWN0ZXJdID0gMDtcclxuXHJcbiAgICBjb3VudFtjaGFyYWN0ZXJdKys7XHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvdW50O1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbmQgdGhlIHBvc2l0aW9uIG9mIHRoZSBudGggb2NjdXJhbmNlIG9mIGEgc3Vic3RyaW5nIGluIGEgc3RyaW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gc2VhcmNoIGZvciB0aGUgc3Vic3RyaW5nLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3ViIFRoZSBzdWJzdHJpbmcgdG8gc2VhcmggZm9yLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gb2NjdXJhbmNlIERldGVybWluZXMgd2hpY2ggb2NjdXJhbmNlIG9mIHRoZSBzdWJzdHJpbmcgd2lsbCBiZSByZXR1cm5lZC5cclxuICpcclxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIHN1YnN0cmluZy5cclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqIFxyXG4gKiBjb25zdCB0ZXh0ID0gJ2hlbGxvIGhlbGxvIHdvcmxkJztcclxuICogXHJcbiAqIGNvbnN0IG50aEluZGV4ID0gc3RyaW5nb3BzLm50aEluZGV4T2YodGV4dCwgJ2wnLCAzKTsgLy8gN1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG50aEluZGV4T2Yoc3RyOiBzdHJpbmcsIHN1Yjogc3RyaW5nLCBvY2N1cmFuY2U6IG51bWJlcik6IChudW1iZXIgfCB1bmRlZmluZWQpIHtcclxuXHJcbiAgbGV0IGxhc3RJbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvY2N1cmFuY2U7IGkrKykge1xyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gc3RyLmluZGV4T2Yoc3ViLCBsYXN0SW5kZXgpO1xyXG5cclxuICAgIGlmIChpbmRleCA9PSAtMSkgcmV0dXJuO1xyXG5cclxuICAgIGxhc3RJbmRleCA9IGluZGV4ICsgMTtcclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gbGFzdEluZGV4O1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIExldmVuc2h0ZWluIGRpc3RhbmNlIGJldHdlZW4gdHdvIHN0cmluZ3MuXHJcbiAqXHJcbiAqIFJlZmVyZW5jZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vYW5kcmVpLW0vOTgyOTI3XHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIxIFRoZSBmaXJzdCBzdHJpbmcuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIyIFRoZSBzZWNvbmQgc3RyaW5nLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIgb2Ygb3BlcmF0aW9ucyByZXF1aXJlZCB0byBtYXRjaCB0aGUgdHdvIHN0cmluZ3MuXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiBcclxuICogY29uc3Qgc3RyMSA9ICdib29rJztcclxuICogY29uc3Qgc3RyMiA9ICdiZWFyJztcclxuICogXHJcbiAqIGNvbnN0IGxldiA9IHN0cmluZ29wcy5sZXZlbnNodGVpbihzdHIxLCBzdHIyKTsgLy8gM1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxldmVuc2h0ZWluKHN0cjE6IHN0cmluZywgc3RyMjogc3RyaW5nKTogbnVtYmVyIHtcclxuXHJcbiAgaWYgKHN0cjEubGVuZ3RoID09IDApIHJldHVybiBzdHIyLmxlbmd0aDtcclxuICBpZiAoc3RyMi5sZW5ndGggPT0gMCkgcmV0dXJuIHN0cjEubGVuZ3RoO1xyXG5cclxuICBjb25zdCB0YWJsZSA9IFtdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8PSBzdHIyLmxlbmd0aDsgKytpKSB0YWJsZVtpXSA9IFtpXTtcclxuXHJcbiAgZm9yIChsZXQgaiA9IDA7IGogPD0gc3RyMS5sZW5ndGg7ICsraikgdGFibGVbMF1bal0gPSBqO1xyXG5cclxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBzdHIyLmxlbmd0aDsgKytpKSB7XHJcblxyXG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gc3RyMS5sZW5ndGg7ICsraikge1xyXG5cclxuICAgICAgaWYgKHN0cjIuY2hhckF0KGkgLSAxKSA9PSBzdHIxLmNoYXJBdChqIC0gMSkpIHtcclxuXHJcbiAgICAgICAgdGFibGVbaV1bal0gPSB0YWJsZVtpIC0gMV1baiAtIDFdO1xyXG5cclxuICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgdGFibGVbaV1bal0gPSBcclxuICAgICAgICAgIE1hdGgubWluKFxyXG4gICAgICAgICAgICB0YWJsZVtpIC0gMV1baiAtIDFdICsgMSxcclxuICAgICAgICAgICAgTWF0aC5taW4oXHJcbiAgICAgICAgICAgICAgdGFibGVbaV1baiAtIDFdICsgMSxcclxuICAgICAgICAgICAgICB0YWJsZVtpIC0gMV1bal0gKyAxXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIClcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRhYmxlW3N0cjIubGVuZ3RoXVtzdHIxLmxlbmd0aF07XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2tzIHRvIHNlZSBpZiBhbGwgb2YgdGhlIGNoYXJhY3RlcnMgaW4gdGhlIHRleHQgYXJlIGFscGhhbnVtZXJpYy5cclxuICogXHJcbiAqIFNvdXJjZTogUHl0aG9uIC0gaXNhbG51bVxyXG4gKiBcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHNlYXJjaC5cclxuICogXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgYWxsIG9mIHRoZSBjaGFyYWN0ZXJzIGluIHRoZSB0ZXh0IGFyZSBhbHBoYW51bWVyaWMgb3IgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQWxudW0oc3RyOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHJcbiAgY29uc3QgYWxsb3dlZENoYXJhY3RlcnM6IHN0cmluZyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XHJcblxyXG4gICAgY29uc3QgY2hhcjogc3RyaW5nID0gc3RyLmNoYXJBdChpKTtcclxuXHJcbiAgICBpZiAoYWxsb3dlZENoYXJhY3RlcnMuaW5kZXhPZihjaGFyKSA8IDApIHJldHVybiBmYWxzZTtcclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgdG8gc2VlIGlmIGFsbCBvZiB0aGUgY2hhcmFjdGVycyBpbiB0aGUgdGV4dCBhcmUgbGV0dGVycy5cclxuICogXHJcbiAqIFNvdXJjZTogUHl0aG9uIC0gaXNhbHBoYVxyXG4gKiBcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHNlYXJjaC5cclxuICogXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgYWxsIG9mIHRoZSBjaGFyYWN0ZXJzIGluIHRoZSB0ZXh0IGFyZSBsZXR0ZXJzIG9yIGZhbHNlIG90aGVyd2lzZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FscGhhKHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XHJcblxyXG4gIGNvbnN0IGFsbG93ZWRDaGFyYWN0ZXJzOiBzdHJpbmcgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eic7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XHJcblxyXG4gICAgY29uc3QgY2hhcjogc3RyaW5nID0gc3RyLmNoYXJBdChpKTtcclxuXHJcbiAgICBpZiAoYWxsb3dlZENoYXJhY3RlcnMuaW5kZXhPZihjaGFyKSA8IDApIHJldHVybiBmYWxzZTtcclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxuXHJcbn1cclxuIl19