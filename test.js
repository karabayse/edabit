function correctStream(user, correct) {
  let outputArr = [];

  for (var i = 0; i < user.length; i++) {
    for (var j = 0; j < correct.length; i++) {
      if (i == j) {
        outputArr.push(1);
      } else if (i != j) {
        outputArr.push(-1);
      }
    }
  }
  console.log(outputArr);
}

correctStream(["cat", "blue", "skt", "umbrells", "paddy"], ["cat", "blue", "sky", "umbrella", "paddy"]);
