// Create a function that returns the minimum number of removals to make the sum
// of all elements in an array even.
// If the sum is already even, return 0  ->  minimumRemovals([5, 7, 9, 11]) ➞ 0
// The output will be either 0 or 1
function minimumRemovals(arr) {
  // add all numbers
  let sum = arr.reduce(function(a, b){
    console.log(a + b);
  }, 0);
  // determine odd or even
  if (sum % 2 == 0) {
    console.log(0);
  } else if (sum % 2 !== 0) {
    // code to remove numbers 
  }
}
