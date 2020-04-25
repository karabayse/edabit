// Write a function that returns true if there exists at least one number that
// is larger than or equal to n.
// Return false for an empty array.
function existsHigher(arr, n) {
  let trueArr = [];
  let falseArr = [];
  let maxNum = Math.max(arr);

  for (var i = 0; i < arr.length; i++) {
    if (n <= arr[i]) {
      trueArr.push(arr[i]);
      console.log(trueArr);
    } else if (n > arr[i]) {
      falseArr.push(arr[i]);
      console.log(falseArr);
    }
    if (trueArr) {
      console.log(true);
    } else if (!Array.isArray(arr) || !arr.length) {
      console.log(false);
    }
  }
}

// existsHigher([1, 3, 4, 5], 6);
existsHigher([], 7);
