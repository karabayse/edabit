// Create a function that returns the product of all odd integers in an array.
function oddProduct(arr) {

  let oddArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddArr.push(arr[i]);
    }
  }
  for (var i = 0; i < oddArr.length; i++) {
    i *= i;
  }
  console.log(oddArr);
}

oddProduct([1, 2, 3, 4, 5]); // 15
