// Given two strings,p1 and p2, return which person drew their gun the fastest.
// If both are drawn at the same time, return "tie".
/*
showdown(
  "   Bang!        ",
  "        Bang!   "
) ➞ "p1"

 // p1 draws his gun sooner than p2

showdown(
  "               Bang! ",
  "             Bang!   "
) ➞ "p2"

showdown(
  "     Bang!   ",
  "     Bang!   "
) ➞ "tie"
*/

function showdown(p1, p2) {
  /*
  localeCompare
  str1.localeCompare(str2);
  Returns -1 if str1 is sorted before str2
  Returns 0 if the two strings are equal
  Returns 1 if str1 is sorted after str2
  */
  if (p1.localeCompare(p2) == 1) {
    console.log("p1");
  } else if (p1.localeCompare(p2) == -1) {
    console.log("p2");
  } else if (p1.localeCompare(p2) == 0) {
    console.log("tie");
  }
}

showdown(" Bang", "Bang");
