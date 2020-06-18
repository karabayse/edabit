// Given an array, transform that array into a mirror.
// Do not repeat the last item of the given array.
// mirror([0, 2, 4, 6]) ➞ [0, 2, 4, 6, 4, 2, 0]
function mirror(arr) {
  let copyArr = [];
  for (var i = 0; i < arr.length; i++) {
    copyArr.push(arr[i]);
  }

  let revArr = arr.reverse();
  console.log(revArr); // [6, 4, 2, 0]

  revArr.shift();
  console.log(revArr); // [4, 2, 0]

  for (var i = 0; i < revArr.length; i++) {
    copyArr.push(arr[i]);
  }

  console.log(copyArr);
}

mirror([0, 2, 4, 6]);
