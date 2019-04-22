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
export declare function count(haystack: string, needle: string): number;
/**
 * Counts the number of times each character appears in the string.
 *
 * @version 0.1.0
 *
 * @param {string} str The string to count characters of.
 *
 * @returns {Object} Returns an object with each key being a character and the value being its count.
 */
export declare function countChars(str: string): any;
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
export declare function nthIndexOf(str: string, sub: string, occurance: number): (number | undefined);
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
export declare function levenshtein(str1: string, str2: string): number;
