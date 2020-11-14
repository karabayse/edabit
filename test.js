// Write a function that takes a year and returns its corresponding century.
function centuryFromYear(year) {
  let century;
  let numStr = year.toString();

  if (numStr.length < 4) {
    let first = numStr.substring(0,1);
    let num = parseInt(first);
    let century = num + 1;
    console.log(century);
  } else if (numStr.length == 4) {
    let firstTwo = numStr.substring(0,2);
    let num = parseInt(firstTwo);
    let century = num + 1;
    console.log(century);
  }
  console.log(century);
}

centuryFromYear(2005); // ➞ 21

centuryFromYear(1950); // ➞ 20

centuryFromYear(1900); // ➞ 19
