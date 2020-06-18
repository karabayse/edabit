// Given an array, transform that array into a mirror.
// Do not repeat the last item of the given array.
// mirror([0, 2, 4, 6]) ➞ [0, 2, 4, 6, 4, 2, 0]
function mirror(arr) {
  let revArr = arr.reverse();
  console.log(revArr); // [6, 4, 2, 0]

  revArr.shift();
  console.log(revArr); // [4, 2, 0]

  console.log(arr); // [4, 2, 0]  ->  reverse changes the original array 
  arr.push(revArr);

  console.log(arr);
}

mirror([0, 2, 4, 6]);
