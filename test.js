// Create a function that takes a number as an argument and returns the square
// root of that number cubed.
// All numbers will evenly square root.
function cubeSquareRoot(num) {
  let cube = Math.pow(num*num*num);
  console.log(cube);
  let sqrt = Math.sqrt(cube);
  console.log(sqrt);
  return sqrt;
}

cubeSquareRoot(81) // ➞ 729
