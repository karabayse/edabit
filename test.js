// Write a function that returns the lexicographically first and lexicographically
// last rearrangements of a string.
// Output the results in the following manner:
// firstAndLast(string) ➞ [first, last]
// firstAndLast("scoop") ➞ ["coops", "spooc"] (c is first letter, s is last)
function firstAndLast(s) {
  let flArr = [];
  let arr = s.split(''); // split string into array of letters
  console.log(arr); // ["s", "c", "o", "o", "p"]
  let sortArr = arr.sort(); // sort array in ascending order
  console.log(sortArr); // ["c", "o", "o", "p", "s"]

  let first = sortArr.toString(); // convert array to string
  console.log(first); // c,o,o,p,s
  let last = sortArr.reverse().toString(); // reverse array -> last
  console.log(last); // s,p,o,o,c

  
  console.log(flArr.push(first, last)); // 2
}

firstAndLast("scoop");
