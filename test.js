// Create a function that takes numbers b and m as arguments and returns the
// derivative of the function f(x)=x^b with respect to x evaluated at x=m,
// where b and m are constants.
// ^ in the context of this challenge means "to the power of", also known as the
// "exponent" operator.
function derivative(b, m) {
  const x = m;

  // sometimes f’(x) is also used for "the derivative of"
  let fx = x^b;
  console.log(fx);
}

derivative(1, 4) // ➞ 1

derivative(3, -2) // ➞ 12

derivative(4, -3) // ➞ -108
