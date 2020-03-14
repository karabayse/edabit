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

  let firstLetter = sortArr[0].toString(); // get first letter of array
  console.log(firstLetter); // returns c rather than s
  console.log(typeof firstLetter); // returns string
  let lastLetter = sortArr.slice(-1)[0].toString(); // get last letter of array
  console.log(lastLetter); // returns s

  let newStr = sortArr.toString();
  console.log(newStr); // c,o,o,p,s
  let removeFirst = newStr.substring(1); // remove first letter of string
  console.log(removeFirst); // ,o,o,p,s
  let first = removeFirst.concat(firstLetter);
  console.log(first); // ,o,o,p,sc

  let reverseStr = removeFirst.split(' ').reverse().join(' ');
  console.log(reverseStr); // ,o,o,p,s
  let last = lastLetter.concat(reverseStr);
  console.log(last); // s,o,o,p,s
  console.log(flArr.push(first, last)); // 2
}

firstAndLast("scoop");
