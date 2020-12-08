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
*/
function bitwiseAND(n1, n2) {
  // 	&  ➞  Sets each bit to 1 if both bits are 1
  // calculate the bit using regex
  let b1 = (n1 >>> 0).toString(2);
  console.log(b1);  //  ➞  111
  let b2 = (n2 >>> 0).toString(2);
  console.log(b2);  //  ➞  1100
  let bitwise = b1 & b2;
  console.log(bitwise);
}

function bitwiseOR(n1, n2) {
  //  |  ➞  Sets each bit to 1 if one of two bits is 1
}

function bitwiseXOR(n1, n2) {
  // ^  ➞  Sets each bit to 1 if only one of two bits is 1
}

bitwiseAND(7, 12) // ➞ 4

bitwiseOR(7, 12) // ➞ 15

bitwiseXOR(7, 12) // ➞ 11
