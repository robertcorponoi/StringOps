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
export declare function ucword(str: string): string;
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
export declare function ucwords(str: string): string;
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
export declare function lcword(str: string): string;
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
export declare function lcwords(str: string): string;
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
export declare function wordwrap(str: string, charNumber: number): string;
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
export declare function reverse(str: string): string;
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
export declare function ltrim(str: string): string;
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
export declare function rtrim(str: string): string;
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
export declare function money(amount: (string | number), locale?: string): string;
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
export declare function pad(str: string, sub: string, amount?: number, side?: string): string;
/**
 * Inserts HTML line breaks before all newlines in a string.
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
export declare function nl2br(str: string): string;
