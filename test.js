// Create a function that takes a number as an argument and returns the square
// root of that number cubed.
// All numbers will evenly square root.
function cubeSquareRoot(num) {
  let sqrt = Math.sqrt(num);
  console.log(sqrt);

  let cube = Math.pow(sqrt, 3);
  console.log(cube);

  return cube;
}

cubeSquareRoot(81) // ➞ 729
