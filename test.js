function correctStream(user, correct) {
  let outputArr = [];

  user.forEach((item1) => correct.forEach((item2) =>
    {if (item1 == item2) {
      outputArr.push(1)
    } else if (item1 != item2) {
      outputArr.push(-1);
    }
  }));
  console.log(outputArr);
}

correctStream(["cat", "blue", "skt", "umbrells", "paddy"], ["cat", "blue", "sky", "umbrella", "paddy"]);
