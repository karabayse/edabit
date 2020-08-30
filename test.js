// Create a function that returns the product of all odd integers in an array.
function oddProduct(arr) {
  let oddArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      oddArr.push(i);
    }
  }

  oddArr.reduce(myFunc);

  function myFunc(total, num) {
    console.log(num * num);
  }
  console.log(num);
}

oddProduct([1, 2, 3, 4, 5]); // 15
