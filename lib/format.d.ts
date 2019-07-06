/**
 * Capitalize the first letter of the first word.
 *
 * @version 0.1.0
 *
 * @param {string} str The string to capitalize.
 *
 * @returns {string} Returns the modified string.
 */
export declare function ucword(str: string): string;
/**
 * Capitalizes the first letter of every word.
 *
 * @version 0.1.0
 *
 * @param {string} str The string to capitalize.
 *
 * @returns {string} Returns the capitalized string.
 */
export declare function ucwords(str: string): string;
/**
 * Make the first letter of the first word lowercase.
 *
 * @version 0.1.0
 *
 * @param {string} str The string to modify.
 *
 * @returns {string} Returns the modified string.
 */
export declare function lcword(str: string): string;
/**
 * Make the first letters of each word lowercase.
 *
 * @version 0.1.0
 *
 * @param {string} str The string to modify.
 *
 * @returns {string} Returns the modified string.
 */
export declare function lcwords(str: string): string;
/**
 * Wraps a string to a given number of characters.
 *
 * @version 0.1.0
 *
 * @param {string} str The string to wrap.
 *
 * @returns {string} Returns the wrapped string.
 */
export declare function wordwrap(str: string, charNumber: number): string;
/**
 * Reverses a string.
 *
 * @version 0.1.0
 *
 * @param {string} str The string to reverse.
 *
 * @returns {string} Returns the reversed string.
 */
export declare function reverse(str: string): string;
/**
 * Trim all whitespace from the beginning of a string.
 *
 * @version 0.1.0
 *
 * @param {string} str The string to remove whitespace from.
 *
 * @returns {string} Returns the string without whitespace at the beginning.
 */
export declare function ltrim(str: string): string;
/**
 * Trim all whitespace from the end of a string.
 *
 * @version 0.1.0
 *
 * @param {string} str The string to remove whitespace from.
 *
 * @returns {string} Returns the string without whitespace at the end.
 */
export declare function rtrim(str: string): string;
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
export declare function money(amount: (string | number), locale?: string): string;
/**
 * Pads a string with a substring on one or both sides.
 *
 * @version 0.1.0
 *
 * @param {string} str The string to pad.
 * @param {string} sub The substring to pad the string with.
 * @param {number} [amount=1] The amount of times to pad the string with the substring.
 * @param {string} [side='right'] The side of the string to pad. The available options are left, right, or both. If both is selected then the string will be padded evenly on both sides with the right being favored if the amount is not even.
 *
 * @returns {string} Returns the padded string.
 */
export declare function pad(str: string, sub: string, amount?: number, side?: string): string;
/**
 * Inserts HTML line breaks before all newlines in a string.
 *
 * @version 0.1.0
 *
 * @param {string} str The string to format with line breaks.
 *
 * @returns {string} Returns the formatted string.
 */
export declare function nl2br(str: string): string;
