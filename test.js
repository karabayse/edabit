/*
Create a function that takes two parameters and, if both parameters are strings,
add them as if they were integers or if the two parameters are integers, concatenate them.
Examples:
stupidAddition(1, 2) ➞ "12"

stupidAddition("1", "2") ➞ 3

stupidAddition("1", 2) ➞ null
*/
function stupidAddition(a, b) {
  if (typeof a === String && typeof b === String) {
    let add = a + b;
    console.log(add);
  } else if (typeof a === Number && typeof b === Number) {
    let concatenate = "" + a + b;
    console.log(concatenate);
  }
}

stupidAddition(1, 2);
stupidAddition("1", "2");
