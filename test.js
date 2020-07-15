// Create a function that repeats each character in a string n times
function repeat(str, n) {
  let strArr = str.split("");
  console.log(strArr);
  let newArr = [];
  for (let i = 0; i < strArr.length; i++) {
      let repChar = strArr[i].repeat(n);
      newArr.push(repChar);
  }
  console.log(newArr);
}

repeat("mice");
