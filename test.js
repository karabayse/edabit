// Write a function that returns true if the product of an array is divisible by
// the sum of that same array. Otherwise, return false.
function divisible(arr) {
  let productArr = [];
  for (var i = 0; i < arr.length; i++) {
    productArr.push(arr[i] * i);
  }
  let sumArr = [];
  for (var i = 0; i < arr.length; i++) {
    sumArr.push(arr[i] + i);
  }
  if (productArr % sumArr == 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

divisible([4, 2, 6]) ➞ true
// 4 * 2 * 6 / 4 + 2 + 6

divisible([3, 5, 1]) ➞ false
