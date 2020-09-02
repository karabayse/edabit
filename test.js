// Create a function that returns the product of all odd integers in an array.
function oddProduct(arr) {
  let oddArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      oddArr.push(i);
      return oddArr.reduce( (a, b) => a * b);
    }
  }
}

oddProduct([1, 2, 3, 4, 5]); // 15


// console.log([1, 2, 3].reduce((a, b)=> a*b, 1));  // 6
//
// console.log([1, 2, 3].reduce((a, b)=> a*b));  // 6
