// Create a function that returns the product of all odd integers in an array.
function oddProduct(arr) {
  let oddArr = [];

  for (let i = 0; i <= arr.length; i++) {
    if (i % 2 !== 0) {
      oddArr.push(i);
      console.log(oddArr.reduce((a, b) => a * b));
    }
  }
}

//oddProduct([1, 2, 3, 4, 5]); // 15

//oddProduct([3, 4, 1, 1, 5]) // 15

//oddProduct([5, 5, 8, 2, 4, 32]) // 25

oddProduct([1, 2, 1, 2, 1, 2, 1, 2]) // 1


// console.log([1, 2, 3].reduce((a, b)=> a*b, 1));  // 6
//
// console.log([1, 2, 3].reduce((a, b)=> a*b));  // 6
