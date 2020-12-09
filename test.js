/*
A decimal number can be represented as a sequence of bits. To illustrate:
6 = 00000110
23 = 00010111

From the bitwise representation of numbers, we can calculate the bitwise AND,
bitwise OR and bitwise XOR. Using the example above:

bitwiseAND(6, 23) ➞ 00000110

bitwiseOR(6, 23) ➞ 00010111

bitwiseXOR(6, 23) ➞ 00010001

Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR
of two numbers.

Notes
JavaScript has a useful function: toString(2), where you can see the binary
representation of a decimal number.
*/
function bitwiseAND(n1, n2) {
  // 	&  ➞  Sets each bit to 1 if both bits are 1
  let bitwise = n1 & n2;
  console.log(bitwise);
}

function bitwiseOR(n1, n2) {
  //  |  ➞  Sets each bit to 1 if one of two bits is 1
  let bitwise = n1 | n2;
  console.log(bitwise);
}

function bitwiseXOR(n1, n2) {
  // ^  ➞  Sets each bit to 1 if only one of two bits is 1
  let bitwise = n1 ^ n2;
  console.log(bitwise);
}

bitwiseAND(7, 12) // ➞ 4

bitwiseOR(7, 12) // ➞ 15

bitwiseXOR(7, 12) // ➞ 11
