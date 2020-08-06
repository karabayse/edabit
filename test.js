// Create a function that converts two arrays of x- and y- coordinates into an
// array of (x,y) coordinates.
// convertCartesian([9, 8, 3], [1, 1, 1])
// ➞ [[9, 1], [8, 1], [3, 1]]
function convertCartesian(x, y) {
  // loop through two arrays and create new arrays
  // new arrays:  [position 0, position 0], [position 1, position 1], etc.
  x.forEach((num1, index) => {
    const num2 = y[index];
    console.log(num1, num2);
});
}

convertCartesian([9, 8, 3], [1, 1, 1]);
