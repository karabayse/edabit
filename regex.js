\\b([a-zA-Z0-9])\\1\\1+\\b

explanation:

\\b               : zero-length word boundary
  (               : start capture group 1
    [a-zA-Z0-9]   : a letter or a digit
  )               : end group
  \\1             : same character as group 1
  \\1+            : same character as group 1 one or more times
\\b               : zero-length word boundary
