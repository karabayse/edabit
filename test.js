// Write a function that returns the lexicographically first and lexicographically
// last rearrangements of a string.
// Output the results in the following manner:
// firstAndLast(string) ➞ [first, last]
// firstAndLast("scoop") ➞ ["coops", "spooc"] (c is first letter, s is last)
function firstAndLast(s) {
  let flArr = [];
  let arr = s.split(''); // split string into array of letters
  console.log(arr); // "scoop"
  let sortArr = arr.sort(); // sort array in ascending order
  console.log(sortArr);

  let firstLetter = sortArr[0].toString(); // get first letter of array
  console.log(firstLetter);
  let lastLetter = sortArr[-1].toString(); // get last letter of array
  console.log(lastLetter);

  let newStr = sortArr.toString();
  console.log(newStr);
  let removeFirst = newStr.substring(1); // remove first letter of string
  console.log(removeFirst);
  let first = removeFirst.concat(firstLetter);
  console.log(first);

  let reverseStr = removeFirst.split("").reverse().join("");
  console.log(reverseStr);
  let last = lastLetter.concat(reverseStr);
  console.log(last);
  console.log(flArr.push(first, last));
}

firstAndLast("scoop");
