// Create a function that converts two arrays of x- and y- coordinates into an
// array of (x,y) coordinates.
// convertCartesian([9, 8, 3], [1, 1, 1]) ➞ [[9, 1], [8, 1], [3, 1]]
function convertCartesian(x, y) {
  // loop through two arrays and create new arrays
  // new arrays:  [position 0, position 0], [position 1, position 1], etc.
  let xLength = x.length;
  let yLength = y.length;

  let xArr0 = [];

  for (var i = 0; i < x.length; i++) {
    xArr0.push(x[i]);
  }
}

convertCartesian([9, 8, 3], [1, 1, 1]);
