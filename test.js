// Create a function that repeats each character in a string n times
function repeat(str, n) {
  let strArr = str.split("");
  console.log(strArr);  // ["m", "i", "c", "e"]

  let newArr = [];
  for (let i = 0; i < strArr.length; i++) {
      let repChar = strArr[i].repeat(n);
      console.log(repChar);
      newArr.push(repChar);
  }
  let newStr = newArr.join("");
  console.log(newStr);
}

repeat("mice", 3);
