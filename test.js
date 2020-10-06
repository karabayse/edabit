// Given two strings, create a function that returns the total number of unique
// characters from the combined string.
function countUnique(s1, s2) {
  let comboString = s1.concat(s2);
  let strArr = comboString.split(' ');
  console.log(strArr);

}

countUnique("apple", "play");
