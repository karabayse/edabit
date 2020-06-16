/*
Create a function that takes two parameters and, if both parameters are strings,
add them as if they were integers or if the two parameters are integers, concatenate them.
Examples:
stupidAddition(1, 2) ➞ "12"

stupidAddition("1", "2") ➞ 3

stupidAddition("1", 2) ➞ null
*/
function stupidAddition(a, b) {
  if (typeof a == "string" && typeof b == "string") {
    let aInt = parseInt(a);
    let bInt = parseInt(b);
    let add = aInt + bInt;
    console.log(add);
  } else if (typeof a == "number" && typeof b == "number") {
    let concatenate = "" + a + b;
    console.log(concatenate);
  }
}

stupidAddition(1, 2);
stupidAddition("1", "2");
