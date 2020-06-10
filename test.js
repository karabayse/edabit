/*
Create a function that takes a number as an argument and returns "Fizz", "Buzz" or "FizzBuzz".

If the number is a multiple of 3 the output should be "Fizz".
If the number given is a multiple of 5, the output should be "Buzz".
If the number given is a multiple of both 3 and 5, the output should be "FizzBuzz".
If the number is not a multiple of either 3 or 5, the number should be output on its own.
*/
function FizzBuzz(num) {
  if (num % 3 !== 0 && num % 5 !== 0) {
    console.log(num);
  } else if (num % 3 == 0 && num % 5 == 0) {
    console.log("FuzzBuzz");
  } else if (num % 5 == 0) {
    console.log("Buzz");
  } else if (num % 3 == 0) {
    console.log("Fizz");
  }
}

FizzBuzz(9);
