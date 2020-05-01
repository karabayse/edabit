// Create a function that takes a number and return an array of three numbers:
// half of the number, quarter of the number and an eighth of the number.
const halfQuarterEighth = (n) => {
  let numArr = [];

  let half = n / 2;
  let quarter = n / 4;
  let eighth = n / 8;

  numArr.push(half, quarter, eighth);
  console.log(numArr);
}

halfQuarterEighth(64);
