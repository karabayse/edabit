// Create a function that applies a discount d to every number in the array.
// The discount is the percentage of the original price (i.e the discount of
// "75%" to 12 would be 9 as opposed to taking off 75% (making 3)).
// There won't be any awkward decimal numbers, only 0.5 to deal with.
// getDiscounts([100], "45%") ➞ [45]
function getDiscounts(nums, d) {
  let dStr = d.slice(0, -1);
  let dNum = parseInt(dStr);
  let discount = dNum / 100;
  let discountArr = [];
  for (var i = 0; i < nums.length; i++) {
    let discountNum = nums[i] * discount;
    discountArr.push(discountNum);
  }
  return discountArr;
}
