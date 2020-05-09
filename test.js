// Create a function that converts two arrays of x- and y- coordinates into an
// array of (x,y) coordinates.
// convertCartesian([9, 8, 3], [1, 1, 1])
// ➞ [[9, 1], [8, 1], [3, 1]]
function convertCartesian(x, y) {
  // loop through two arrays and create new arrays
  // Use the second parameter forEach accepts instead, which will be the current
  // index you're iterating over:
  x.forEach((num1, index) => {
  const num2 = y[index];
  console.log(num1, num2);
});
  // new arrays:  [position 0, position 0], [position 1, position 1], etc.
}

function convertCartesian([9, 8, 3], [1, 1, 1])
