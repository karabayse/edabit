// Write a function that takes an array of elements and returns only the integers.
function returnOnlyInteger(arr) {
  let intArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == Number) {
      intArr.push(arr[i]);
    }
  }
  console.log(intArr);
}

returnOnlyInteger([a, b, c, 1, 2, 3]);
