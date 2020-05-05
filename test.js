/*
Using the .test() method in your function, return whether a string contains the
characters "a" and "c" (in that order) with any number of characters (including
zero) between them.
*/
function asterisk(string) {
  let ac = new RegExp(\\b([ac])\\1\\1+\\b);
  let res = ac.test(string);
  console.log(res);
}

asterisk("Yes");

/*
\\b([a-zA-Z0-9])\\1\\1+\\b

explanation:

\\b               : zero-length word boundary
  (               : start capture group 1
    [a-zA-Z0-9]   : a letter or a digit
  )               : end group
  \\1             : same character as group 1
  \\1+            : same character as group 1 one or more times
\\b               : zero-length word boundary
*/
