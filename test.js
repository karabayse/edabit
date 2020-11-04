// Create a function that takes in two arrays: the array of user-typed words,
// and the array of correctly-typed words and outputs an array containing 1s
// (correctly-typed words) and -1s (incorrectly-typed words).
function correctStream(user, correct) {
  let outputArr = [];

  user.forEach((word1, index) => {
    const word2 = correct[index];
    if (word1 === word2) {
      outputArr.push(1);
    } else if (word1 !== word2) {
      outputArr.push(-1);
    }
  });
  console.log(outputArr);
}

correctStream(
  ["cat", "blue", "skt", "umbrells", "paddy"],
  ["cat", "blue", "sky", "umbrella", "paddy"]);
