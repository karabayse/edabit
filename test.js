// Create a function that takes two parameters (start, stop), and returns the
// sum of all even numbers in the range.
// Remember that the start and stop values are inclusive.
function sumEvenNumsInRange(start, stop) {
  for (let i = start; i <= stop; i++) {
    if (start[i] % 2 == 0) {
      start[i] += start[i];
      console.log(start);
    }
  }
  console.log(i);
}

sumEvenNumsInRange(51, 150) // ➞ 5050
