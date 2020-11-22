// Write a function that takes a year and returns its corresponding century.
function centuryFromYear(year) {
  let century;
  let numStr = year.toString();

  if (numStr.length == 1) {
    let century = 1;
    console.log(century);
  } else if (numStr.length == 2 && numStr[1] == 0) {
    let first = numStr.substring(0,1);
    let num = parseInt(first);
    let century = num + 1;
    console.log(century);
  } else if (numStr.length == 2) {
    let first = numStr.substring(0,1);
    let num = parseInt(first);
    let century = num + 1;
    console.log(century);
  } else if (numStr.length == 3 && numStr[-1] == 0 && numStr[-2] == 0) {
    let first = numStr.substring(0,1);
    let num = parseInt(first);
    let century = num + 1;
    console.log(century);
  } else if (numStr.length == 4 && numStr[-1] == 0 && numStr[-2] == 0) {
    let first = numStr.substring(0,1);
    let num = parseInt(first);
    let century = num;
    console.log(century);
  } else if (numStr.length == 4) {
    let firstTwo = numStr.substring(0,2);
    let num = parseInt(firstTwo);
    let century = num + 1;
    console.log(century);
  }
}

centuryFromYear(2005); // ➞ 21

centuryFromYear(950); // ➞ 10

centuryFromYear(1900); // ➞ 19

centuryFromYear(24);

centuryFromYear(2);
