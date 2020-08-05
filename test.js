// Create a function which validates whether a bridge is safe to walk on
// (i.e. has no gaps in it to fall through).
function isSafeBridge(str) {
  /*
  if (str.indexOf('') == 0) {
    console.log("True");;
  } else if (str.indexOf('') > 0) {
    console.log("False");;
  } else {
    console.log("False");;
  }
  */

  if (/\s/.test(str)) {
    // It has any kind of whitespace
    console.log("False");
  } else {
    console.log("True");
  }

}

/*
Alternatively:
if (/\s/.test(str)) {
    // It has any kind of whitespace
}
*/
/*
isSafeBridge("####") ➞ true

isSafeBridge("## ####") ➞ false

isSafeBridge("#") ➞ true
*/
