// Write a function that takes a year and returns its corresponding century.
function centuryFromYear(year) {
  let century;

  if (year.length < 4) {
    let numStr = year.toString();
    let first = numStr.substring(0,1);
    let num = parseInt(first);
    let century = num + 1;
    console.log(century);
  } else if (year.length == 4) {
    let numStr = year.toString();
    let firstTwo = numStr.substring(0,2);
    let num = parseInt(firstTwo);
    let century = num + 1;
    console.log(century);
  }
  console.log(century);

  /*
  let l = Math.pow(10, Math.floor(Math.log(year)/Math.log(10))-1);
  let b = Math.floor(year/l);
  let digit = b-Math.floor(b/10)*10;
  */
}

centuryFromYear(2005) // ➞ 21

centuryFromYear(1950) // ➞ 20

centuryFromYear(1900) // ➞ 19
