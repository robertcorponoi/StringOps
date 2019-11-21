'use strict'

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
export function ucword(str: string): string {

  return str.charAt(0).toUpperCase() + str.slice(1);

}

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
export function ucwords(str: string): string {

  const split = str.split(' ');

  split.forEach((o, i, a) => a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1));

  return split.join(' ');

}

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
export function lcword(str: string): string {

  return str.charAt(0).toLowerCase() + str.slice(1);

}

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
export function lcwords(str: string): string {

  const split = str.split(' ');

  split.forEach((o, i, a) => a[i] = a[i].charAt(0).toLowerCase() + a[i].slice(1));

  return split.join(' ');

}

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
export function wordwrap(str: string, charNumber : number): string {

  return `${str.slice(0, charNumber + 1)}\n${str.slice(charNumber + 1)}`;

}

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
export function reverse(str: string): string {

  let reversed: string = '';

  for (let i = str.length - 1; i >= 0; i--) {

    reversed += str[i];

  }

  return reversed;

}

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
export function ltrim(str: string): string {

  while (str.charAt(0) == ' ') str = str.slice(1);

  return str;

}

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
export function rtrim(str: string): string {

  while (str.charAt(str.length - 1) == ' ') str = str.slice(0, -1);

  return str;

}

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
export function money(amount: (string | number), locale: string = 'US'): string {

  let str = amount.toString();

  let index = str.length;

  switch (locale) {

    case 'US':
      const coins = str.indexOf('.');

      if (coins > 0) index = coins;

      for (let i = index - 3; i > 0; i -= 3) {

        str = `${str.slice(0, i)},${str.slice(i)}`;

      }

      break;

  }

  return `$${str}`;

}

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
export function pad(str: string, sub: string, amount: number = 1, side: string = 'right'): string {

  let padded: string = '';

  switch (side) {

    case 'left':
      padded = `${sub.repeat(amount)}${str}`;
      break;

    case 'right':
      padded = `${str}${sub.repeat(amount)}`;
      break;

    case 'both':
      let padLeft: number = 0;
      let padRight: number = 0;

      if (amount % 2 === 0) {

        padLeft = amount / 2;
        padRight = amount / 2;

      } else {

        padRight = Math.round(amount / 2)
        padLeft = amount - padRight;

      }

      padded = `${sub.repeat(padLeft)}${str}${sub.repeat(padRight)}`;

      break;

  }

  return padded;

}

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
export function nl2br(str: string): string {

  return str.replace(/(\\r|\\n|\\r\\n|\\n\\r)/g, '<br />');

}
