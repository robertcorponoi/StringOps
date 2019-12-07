import CharCount from './interfaces/CharCount';
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
export declare function count(haystack: string, needle: string): number;
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
export declare function countChars(str: string): CharCount;
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
export declare function nthIndexOf(str: string, sub: string, occurance: number): (number | undefined);
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
export declare function levenshtein(str1: string, str2: string): number;
/**
 * Checks to see if all of the characters in the text are alphanumeric.
 *
 * Source: Python - isalnum
 *
 * @param {string} str The string to search.
 *
 * @returns {boolean} Returns true if all of the characters in the text are alphanumeric or false otherwise.
 */
export declare function isAlnum(str: string): boolean;
/**
 * Checks to see if all of the characters in the text are letters.
 *
 * Source: Python - isalpha
 *
 * @param {string} str The string to search.
 *
 * @returns {boolean} Returns true if all of the characters in the text are letters or false otherwise.
 */
export declare function isAlpha(str: string): boolean;
