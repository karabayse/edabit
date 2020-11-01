// Create a function that takes two parameters (start, stop), and returns the
// sum of all even numbers in the range.
// Remember that the start and stop values are inclusive.
function sumEvenNumsInRange(start, stop) {
  let i;
  let sum;
  if (start % 2 == 0) {
    for (let i = start; i <= stop; i += 2) {
      sum += i;
      console.log(i);
    }
  }
  console.log(sum);
}

sumEvenNumsInRange(51, 150) // ➞ 5050
