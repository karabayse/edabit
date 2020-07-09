// Given a string of letters, how many capital letters are there?
function capitalLetters(str) {
  let numUpper = str.length - str.replace(/[A-Z]/g, '').length;
  console.log(numUpper);
}
