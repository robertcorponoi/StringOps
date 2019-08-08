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