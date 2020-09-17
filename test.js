// Create a function that converts two arrays of x- and y- coordinates into an
// array of (x,y) coordinates.
// convertCartesian([9, 8, 3], [1, 1, 1]) ➞ [[9, 1], [8, 1], [3, 1]]
function convertCartesian(x, y) {
  // loop through two arrays and create new arrays
  // new arrays:  [position 0, position 0], [position 1, position 1], etc.

  // use .map
  /*
  The map() method creates a new array with the results of calling a function
  for every array element.

  The map() method calls the provided function once for each element in an array, in order.

  Note: map() does not execute the function for array elements without values.

  Note: this method does not change the original array.

  /*
  How to pass a second parameter to JavaScript map?
  stackoverflow.com
  I need to pass an array index as a second parameter to JavaScript .map().
  How can I iterate on arr1 while applying .map() to arr2?
  */

  /*
  var numbers = [65, 44, 12, 4];
  var newarray = numbers.map(myFunction)

  function myFunction(num) {
  return num * 10;
  }
  */

  let newArr = x.map(myFunction)
  function myFunction() {
    
  }


  for (var i = 0; i < x.length; i++) {
    pos1Arr.push(x[i]);
  }
}

convertCartesian([9, 8, 3], [1, 1, 1]);
