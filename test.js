// Create a function which validates whether a bridge is safe to walk on
// (i.e. has no gaps in it to fall through).
function isSafeBridge(str) {
  if (str.indexOf('') == 0) {
    return true;
  } else if (str.indexOf('') > 0) {
    return false;
  }
}

isSafeBridge("####") ➞ true

isSafeBridge("## ####") ➞ false

isSafeBridge("#") ➞ true
