// Create a function to calculate how many characters in total are needed to
// make up the shape. You will be given an array of strings which make up a shape
// in the compiler (i.e. a square, a rectangle or a line).
function countCharacters(arr) {
  let arrLength = arr.length;
  console.log(arrLength);

  let strLength = arr[0].length;
  console.log(strLength);

  let characters = arrLength * strLength;
  console.log(characters);

  // return characters;
}

countCharacters([
  "###",
  "###",
  "###"
]) // ➞ 9
