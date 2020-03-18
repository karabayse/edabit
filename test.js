// Write a function that returns true if all characters in a string are identical
// and false otherwise.
function isIdentical(s) {
  let sArr = s.split('');
  console.log(sArr);

  let yesArr = [];
  let noArr = [];

  for (var i = 0; i < sArr.length; i++) {
     if (sArr[i] == i) {
       yesArr.push(sArr[i]);
     } else {
       noArr.push(sArr[i]);
     }
  }
  console.log(yesArr);
  console.log(noArr);

  if (yesArr) {
    console.log("True");
  }
}

isIdentical("identical");
