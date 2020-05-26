// Create a function that finds the maximum range of a triangle's third edge,
// where the side lengths are all integers.
// The sum of two sides must always be greater than the third side
function nextEdge(side1, side2) {
  let sum = side1 + side2;
  let max = sum - 1;
  return max;
}
