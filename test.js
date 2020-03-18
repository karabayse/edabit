// Write a function that returns true if all characters in a string are identical
// and false otherwise.
function isIdentical(s) {
  if (s.split('').every(char => char === s[0])) {
    return true;
  } else {
    return false;
  }
}

isIdentical("identical");
