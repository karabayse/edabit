// The mean of a group of numbers is calculated by summing all numbers, and
// dividing this sum by the total count of numbers in the group. Given a sorted
// array of numbers, return the mean (rounded to one decimal place).
function mean(nums) {
   let numsSum = nums.reduce((a, b) => a + b, 0);
   console.log(numsSum);

   let numsNum = nums.length;

   let numsMean = numsSum / numsNum;
   console.log(numsMean);

   let numsRounded = numsMean.toFixed(1);
   console.log(numsRounded);
}

mean([1, 3, 8, 9, 9, 10]) // ➞ 6.7
