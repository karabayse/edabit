// Create a function that finds all even numbers from 1 to the given number.
/*


findEvenNums(4) ➞ [2, 4]

findEvenNums(2) ➞ [2]
*/
function findEvenNums(num) {
  let evenArr = [];

  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
        evenArr.push(i);
    }
  }
  console.log(evenArr);;
}

findEvenNums(8);
