// Given an unsorted array, create a function that returns the nth smallest
// element (the smallest element is the first smallest, the second smallest
// element is the second smallest, etc).
/*
n will always be >= 1.
Each number in the array will be distinct (there will be a clear ordering).
Given an out of bounds parameter (e.g. an array is of size k), and you are asked
to find the m > k smallest element, return null.
*/
function nthSmallest(arr, n) {
  if (n > arr.length) {
    return null;
  }
	arr.sort(function(a, b) {
    return a - b;
  });
  return arr[n - 1];
}

nthSmallest([10, 20, 3, 84, 77], 2);
