// Create a function that repeats each character in a string n times
function repeat(str, n) {
  let strArr = str.split();
  for (let i = 0; i < strArr.length; i++) {
      let repArr = strArr.repeat(n);
  }
  return repArr;
}
