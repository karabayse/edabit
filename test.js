// Write a function that returns the lexicographically first and lexicographically
// last rearrangements of a string.
// Output the results in the following manner:
// firstAndLast(string) ➞ [first, last]
// firstAndLast("scoop") ➞ ["coops", "spooc"]
function firstAndLast(s) {
  let flArr = [];
  let arr = s.split(''); // split string into array of letters
  console.log(arr); // ["s", "c", "o", "o", "p"]
  let sortArr = arr.sort(); // sort array in ascending order
  console.log(sortArr); // ["c", "o", "o", "p", "s"]

  let first = sortArr.toString().replace(/,/g, ''); // convert array to string
  console.log(first); // coops
  let last = sortArr.reverse().toString().replace(/,/g, ''); // reverse array
  console.log(last); // spooc

  flArr.push(first, last);
  console.log(flArr);
}

firstAndLast("scoop");
