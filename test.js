// Create a function which validates whether a bridge is safe to walk on
// (i.e. has no gaps in it to fall through).
function isSafeBridge(str) {
  return str.indexOf('') >= 0;
}

isSafeBridge("####") ➞ true

isSafeBridge("## ####") ➞ false

isSafeBridge("#") ➞ true
