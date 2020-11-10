// Write a function that takes a year and returns its corresponding century.
function centuryFromYear(year) {
  let digit = year.toString()[1];

  /*
  let l = Math.pow(10, Math.floor(Math.log(year)/Math.log(10))-1);
  let b = Math.floor(year/l);
  let digit = b-Math.floor(b/10)*10;
  */
}

centuryFromYear(2005) ➞ 21

centuryFromYear(1950) ➞ 20
