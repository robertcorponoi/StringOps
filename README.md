<div align="center">

# StringOps

</div>

StringOps is made to fill in the gaps of String methods in JavaScript that currently exist in other languages but not yet in JavaScript.

If using ES6 imports then you can just import the methods you need to save space.

<div align="center">

[![NPM version](https://img.shields.io/npm/v/stringops.svg?style=flat)](https://www.npmjs.com/package/stringops)
[![Known Vulnerabilities](https://snyk.io/test/github/robertcorponoi/stringops/badge.svg)](https://snyk.io/test/github/robertcorponoi/stringops)
[![NPM downloads](https://img.shields.io/npm/dm/stringops.svg?style=flat)](https://www.npmjs.com/package/stringops)
[![Gitter](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/robertcorponoi)

</div>

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

## **Documentation**

Please see the [files in the `docs` directory](./docs):

* [Converting](./docs/convert.md)
* [Searching](./docs/search.md)
* [Transforming](./docs/transform.md)

## **API**

A breakdown of all of the API can be found below:

#### **Conversion Functions**

<a href="./docs/convert.md#bin2Hexbin">bin2Hex(bin)</a>
Converts a binary string to hexadecimal.

<a href="./docs/convert.md#hex2Binhex">hex2Bin(hex)</a>
Converts a hexadecimal to a binary string.

---

#### **Search/Find Functions**
<a href="./docs/search.md#counthaystack-needle">count(haystack, needle)</a>
Count the number of occurances that a substring is found
in a string.

<a href="./docs/search.md#countCharsstr">countChars(str)</a>
Counts the number of times each character appears in the string.</p>

<a href="./docs/search.md#nthIndexOfstr-sub-occurance">nthIndexOf(str, sub, occurance)</a>
Find the position of the nth occurance of a substring in a string.

<a href="./docs/search.md#levenshteinstr1-str2">levenshtein(str1, str2)</a>
Calculates the Levenshtein distance between two strings.

---

#### **Transform Functions**
<a href="./docs/transform.md#ucwordstr">ucword(str)</a>
Capitalize the first letter of the first word.

<a href="./docs/transform.md#ucwordsstr">ucwords(str)</a>
Capitalizes the first letter of every word.

<a href="./docs/transform.md#lcwordstr">lcword(str)</a>
Make the first letter of the first word lowercase.

<a href="./docs/transform.md#lcwordsstr">lcwords(str)</a>
Make the first letters of each word lowercase.

<a href="./docs/transform.md#wordwrapstr">wordwrap(str)</a>
Wraps a string to a given number of characters.

<a href="./docs/transform.md#reversestr">reverse(str)</a>
Reverses a string.

<a href="./docs/transform.md#ltrimstr">ltrim(str)</a>
Trim all whitespace from the beginning of a string.

<a href="./docs/transform.md#rtrimstr">rtrim(str)</a>
Trim all whitespace from the end of a string.

<a href="./docs/transform.md#moneyamount-locale">money(amount, [locale])</a>
Formats a string into a representation of a type of currency.
Currently only US/GB is supported is supported but more will be added with later
updates.

<a href="./docs/transform.md#padstr-sub-amount-side">pad(str, sub, [amount], [side])</a>
Pads a string with a substring on one or both sides.

## **Tests**

To run all of the available tests for stringops use:

```shell
$ npm run test
```