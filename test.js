// Write a function that returns true if there exists at least one number that
// is larger than or equal to n.
// Return false for an empty array.
function existsHigher(arr, n) {
  arr.some(function (n) {
	   if (item > n) {
       console.log(true);
     } else if (arr == []) {
       console.log(false);
     }
   });
}

existsHigher([1, 3, 4, 5], 6);
existsHigher([], 7);
