/*
Create a function that takes a string and returns the middle character(s).
If the word's length is odd, return the middle character.
If the word's length is even, return the middle two characters.
All test cases contain a single word (as a string).
*/
function getMiddle(str) {
  var position;
  var length;
  if(str.length % 2 == 1) {
    position = str.length / 2;
    length = 1;
  } else {
    position = str.length / 2 - 1;
    length = 2;
  }
  return str.substring(position, position + length);
}

getMiddle("middle");
