// Create a function that takes two numbers and a mathematical operator and returns the result.
/*
Numbers can be negative.

calculate(4, 9, "+") ➞ 13

calculate(12, 5, "-") ➞ 7

calculate(6, 3, "*") ➞ 18

calculate(25, 5, "/") ➞ 5

calculate(14, 3, "%") ➞ 2

The only operations used are those in the examples above.
*/
function calculate(num1, num2, op) {
  let result = eval((num1) op (num2));
  return result;
}
