/*
Groups and ranges indicate groups and ranges of expression characters.
The regular expression x|y matches either "x" or "y".

const REGEXP = /blue|red/

"red flag".match(REGEXP)  // red
"blue flag".match(REGEXP)  // blue

// Matches "blue" in "blue flag" and "red" in "red flag".
Create a regular expression to match all red flag and blue flag in a string.
You must use | in your expression. Flags can come in any order.

Example:
"red flag blue flag".match(REGEXP) ➞ ["red flag", "blue flag"]
*/

const REGEXP = /blue|red/g
