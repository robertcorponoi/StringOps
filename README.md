# StringOps

StringOps is made to fill in the gaps of String methods in JavaScript that currently exist in other languages but not yet in JavaScript.

More and more methods are being added every week and if using ES6 imports then you can just import the methods you need to save space.

### Installation

StringOps is available as both a Node.js package available through NPM and as an ES6 module.

To download StringOps through NPM, use the following command:

```shell
$ npm install stringops
```
From here you can either require the package:

```js
const stringops = require('stringops');
```

Or if you're developing in an environment that allows the use of imports, you can use:

```js
import * as stringops from './path/to/stringops.js';
```

Or even further you can import just the methods you need:

```js
import { ltrim, ucwords, nthIndexOf } from './path/to/stringops.js';
```

### API

A breakdown of all of the API can be found

#### **Conversion Functions**

<a href="#bin2Hexbin">bin2Hex(bin)</a>
Converts a binary string to hexadecimal.

<a href="#hex2Binhex">hex2Bin(hex)</a>
Converts a hexadecimal to a binary string.

---

#### **Search/Find Functions**
<a href="#counthaystack-needle">count(haystack, needle)</a>
Count the number of occurances that a substring is found
in a string.

<a href="#countCharsstr">countChars(str)</a>
Counts the number of times each character appears in the string.</p>

<a href="#nthIndexOfstr-sub-occurance">nthIndexOf(str, sub, occurance)</a>
Find the position of the nth occurance of a substring in a string.

<a href="#levenshteinstr1-str2">levenshtein(str1, str2)</a>
Calculates the Levenshtein distance between two strings.

---

#### **Transform Functions**
<a href="#ucwordstr">ucword(str)</a>
Capitalize the first letter of the first word.

<a href="#ucwordsstr">ucwords(str)</a>
Capitalizes the first letter of every word.

<a href="#lcwordstr">lcword(str)</a>
Make the first letter of the first word lowercase.

<a href="#lcwordsstr">lcwords(str)</a>
Make the first letters of each word lowercase.

<a href="#wordwrapstr">wordwrap(str)</a>
Wraps a string to a given number of characters.

<a href="#reversestr">reverse(str)</a>
Reverses a string.

<a href="#ltrimstr">ltrim(str)</a>
Trim all whitespace from the beginning of a string.

<a href="#rtrimstr">rtrim(str)</a>
Trim all whitespace from the end of a string.

<a href="#moneyamount-locale">money(amount, [locale])</a>
Formats a string into a representation of a type of currency.
Currently only US/GB is supported is supported but more will be added with later
updates.

<a href="#padstr-sub-amount-side">pad(str, sub, [amount], [side])</a>
Pads a string with a substring on one or both sides.

## API

### **Conversion Methods**

#### bin2Hex(bin)
Converts a binary string to hexadecimal.

**Returns**: <code>string</code> - Returns the hexadecimal representation of the binary string.  
**Version**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| bin | <code>string</code> | The binary string to convert to hexadecimal. |

#### hex2Bin(hex)
Converts a hexadecimal to a binary string.

**Returns**: <code>string</code> - Returns the binary representation of the hexadecimal value.  
**Version**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>string</code> | The hexademical value to convert to binary. |

---

### **Search Methods**

#### count(haystack, needle)
Count the number of occurances that a substring is found
in a string.

**Returns**: <code>number</code> - Returns the number of times the substring was found in the string.  
**Version**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| haystack | <code>string</code> | The string to search through. |
| needle | <code>string</code> | The substring to search for. |

#### countChars(str)
Counts the number of times each character appears in the string.

**Returns**: <code>Object</code> - Returns an object with each key being a character and the value being its count.  
**Version**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to count characters of. |

#### nthIndexOf(str, sub, occurance)
Find the position of the nth occurance of a substring in a string.

**Returns**: <code>number</code> - Returns the index of the substring.  
**Version**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to search for the substring. |
| sub | <code>string</code> | The substring to searh for. |
| occurance | <code>number</code> | Determines which occurance of the substring will be returned. |

#### levenshtein(str1, str2)
Calculates the Levenshtein distance between two strings.

Reference: https://gist.github.com/andrei-m/982927

**Returns**: <code>number</code> - Returns the number of operations required to match the two strings.  
**Version**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| str1 | <code>string</code> | The first string. |
| str2 | <code>string</code> | The second string. |

---

### **Transform Methods**

#### ucword(str)
Capitalize the first letter of the first word.

**Returns**: <code>string</code> - Returns the modified string.  
**Version**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to capitalize. |

#### ucwords(str)
Capitalizes the first letter of every word.

**Returns**: <code>string</code> - Returns the capitalized string.  
**Version**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to capitalize. |

#### lcword(str)
Make the first letter of the first word lowercase.

**Returns**: <code>string</code> - Returns the modified string.  
**Version**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to modify. |

#### lcwords(str)
Make the first letters of each word lowercase.

**Returns**: <code>string</code> - Returns the modified string.  
**Version**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to modify. |

#### wordwrap(str)
Wraps a string to a given number of characters.

**Returns**: <code>string</code> - Returns the wrapped string.  
**Version**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to wrap. |

#### reverse(str)
Reverses a string.

**Returns**: <code>string</code> - Returns the reversed string.  
**Version**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to reverse. |

#### ltrim(str)
Trim all whitespace from the beginning of a string.

**Returns**: <code>string</code> - Returns the string without whitespace at the beginning.  
**Version**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to remove whitespace from. |

#### rtrim(str)
Trim all whitespace from the end of a string.

**Returns**: <code>string</code> - Returns the string without whitespace at the end.  
**Version**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to remove whitespace from. |

#### money(amount, locale)
Formats a string into a representation of a type of currency.

Currently only US/GB is supported is supported but more will be added with later
updates.

**Returns**: <code>string</code> - Returns the amount in a string representing that locale's currency.  
**Version**: 0.1.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| amount | <code>string</code> \| <code>number</code> |  | The string or number that represents the money amount. |
| locale | <code>string</code> | <code>&quot;&#x27;US&#x27;&quot;</code> | The locale to use to format the currency. |

#### pad(str, sub, amount, side)
Pads a string with a substring on one or both sides.

**Returns**: <code>string</code> - Returns the padded string.  
**Version**: 0.1.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>string</code> |  | The string to pad. |
| sub | <code>string</code> |  | The substring to pad the string with. |
| amount | <code>number</code> | <code>1</code> | The amount of times to pad the string with the substring. |
| side | <code>string</code> | <code>&quot;&#x27;right&#x27;&quot;</code> | The side of the string to pad. The available options are left, right, or both.                                 If both is selected then the string will be padded evenly on both sides with the right                                being favored if the amount is not even. |

