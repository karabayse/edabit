// Write a function that returns true if there exists at least one number that
// is larger than or equal to n.
// Return false for an empty array.
function existsHigher(arr, n) {
  let max = Math.max(...arr);
  console.log(max);

  if (max >= n) {
    console.log(true);
  } else if (max < n) {
    console.log(false);
  } else if (arr.length == 0) {
    console.log(false);
  }
}

existsHigher([1, 3, 4, 5], 6); // false
existsHigher([], 7); // false
existsHigher([8, 9, 11], 10) // true
