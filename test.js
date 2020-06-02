// Create a function that returns the minimum number of removals to make the sum
// of all elements in an array even.
// If the sum is already even, return 0  ->  minimumRemovals([5, 7, 9, 11]) ➞ 0
// The output will be either 0 or 1
function minimumRemovals(arr) {
  // add all numbers
  let sum = arr.reduce(function(a, b){
    return a + b;
  }, 0);
  console.log(sum);
  // determine odd or even
  if (sum % 2 == 0) {
    console.log(0);
  // if not even
  } else if (sum % 2 !== 0) {
    // code to remove numbers
    // loop through array
    for (let i = 0; i < arr.length; i++) {
      // remove an odd number to make it even
      if (i % 2 !== 0) {
        arr.splice(i);
      }
      console.log(1);
    }
  }
}

minimumRemovals([5, 7, 9, 11]);
minimumRemovals([6, 7, 9, 11]);
