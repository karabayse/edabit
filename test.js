// Create a function that repeats each character in a string n times
function repeat(str, n) {
  let strArr = str.split("");
  console.log(strArr);  // ["m", "i", "c", "e"]

  let newArr = [];
  for (let i = 0; i < strArr.length; i++) {
      let repChar = strArr[i].repeat(n);

      console.log(repChar);  // 4 with circle -> The number of times that output
      // has been repeated, also known as log stacking

      newArr.push(repChar);
  }
  console.log(newArr);  // ["", "", "", ""]
}

repeat("mice");
