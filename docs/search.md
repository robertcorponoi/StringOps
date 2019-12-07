### **Search Methods**

#### count(haystack, needle)
Count the number of occurances that a substring is found
in a string.

**Returns**: <code>number</code> - Returns the number of times the substring was found in the string.  

| Param | Type | Description |
| --- | --- | --- |
| haystack | <code>string</code> | The string to search through. |
| needle | <code>string</code> | The substring to search for. |

#### countChars(str)
Counts the number of times each character appears in the string.

**Returns**: <code>Object</code> - Returns an object with each key being a character and the value being its count.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to count characters of. |

#### nthIndexOf(str, sub, occurance)
Find the position of the nth occurance of a substring in a string.

**Returns**: <code>number</code> - Returns the index of the substring.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to search for the substring. |
| sub | <code>string</code> | The substring to searh for. |
| occurance | <code>number</code> | Determines which occurance of the substring will be returned. |

#### levenshtein(str1, str2)
Calculates the Levenshtein distance between two strings.

Reference: https://gist.github.com/andrei-m/982927

**Returns**: <code>number</code> - Returns the number of operations required to match the two strings.  

| Param | Type | Description |
| --- | --- | --- |
| str1 | <code>string</code> | The first string. |
| str2 | <code>string</code> | The second string. |

#### isAlnum(str)
Checks to see if all of the characters in the text are alphanumeric.

Source: Python - isalnum

**Returns**: <code>boolean</code> - Returns true if all of the characters in the text are alphanumeric or false otherwise.

| Param | Type | Description |
| --- | --- | --- |
| str1 | <code>string</code> | The string to search. |

#### isAlpha(str)
Checks to see if all of the characters in the text are letters.

Source: Python - isalpha

**Returns**: <code>number</code> - Returns true if all of the characters in the text are letters or false otherwise.

| Param | Type | Description |
| --- | --- | --- |
| str1 | <code>string</code> | The string to search. |