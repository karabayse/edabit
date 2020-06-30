// Write a function that returns true if the product of an array is divisible by
// the sum of that same array. Otherwise, return false.
function divisible(arr) {
  let duplicateArr = arr.slice();
  let productArr = arr.reduce( (a,b) => a * b, 0 );
  let sumArr = duplicateArr.reduce( (a,b) => a + b, 0 );

  if (productArr % sumArr == 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

//divisible([4, 2, 6]) // ➞ true

divisible([3, 5, 1]) //➞ false
