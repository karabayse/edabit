// Create a function that returns the product of all odd integers in an array.
function oddProduct(arr) {
  let oddArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddArr.push(arr[i]);
      oddArr[i] *= i;
    }
  }
  return oddArr;
}
