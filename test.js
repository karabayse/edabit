// Write a function that partitions the array into two subarrays:
// one with all even integers, and the other with all odd integers.
// Return your result in the following format:

// [[evens], [odds]]
function evenOddPartition(arr) {
  let evenArr = [];
  let oddArr = [];
  let partitionArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evenArr.push(arr[i]);
    } else {
      oddArr.push(arr[i]);
    }
  }
  partitionArr.push(evenArr, oddArr);
  console.log(partitionArr);
}

evenOddPartition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
