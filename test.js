// Create a function that converts two arrays of x- and y- coordinates into an
// array of (x,y) coordinates.
// convertCartesian([9, 8, 3], [1, 1, 1]) ➞ [[9, 1], [8, 1], [3, 1]]
function convertCartesian(x, y) {
  // loop through two arrays and create new arrays
  x.map(function(index){
   return y[index]
 })
}

convertCartesian([9, 8, 3], [1, 1, 1]);
