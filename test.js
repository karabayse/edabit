// Create a function which returns the number of true values there are in an array.
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).
function countTrue(arr) {
  let counter = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == true) {
      counter++;
    } else if (arr.length = 0) {
      console.log(0);
    }
  }
  console.log(counter);
}

countTrue([true, false, false, true, false]) // ➞ 2

countTrue([false, false, false, false]) // ➞ 0

countTrue([]) // ➞ 0
