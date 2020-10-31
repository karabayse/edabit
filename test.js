// Create a function that takes two parameters (start, stop), and returns the
// sum of all even numbers in the range.
// Remember that the start and stop values are inclusive.
function sumEvenNumsInRange(start, stop) {
  let i;
  for (let i = start; i <= stop; i++) {
    if (start % 2 == 0) {
      i += 2;
      i += i;
    }
    console.log(i);
  }
}

sumEvenNumsInRange(51, 150) // ➞ 5050
