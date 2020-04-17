// Create a function that takes two arguments (item, times). The first argument
// (item) is the item that needs repeating while the second argument (times) is
// the number of times the item is to be repeated. Return the result in an array.
// item can be either a string or a number.
// times will always be a number.
// repeat("edabit", 3) ➞ ["edabit", "edabit", "edabit"]
function repeat(item, times) {
  let repArr = [];

  let repItem = item.repeat(times);
  console.log(repItem);  //  edabitedabitedabit

  let itemReplace = repItem.replace("edabitedabitedabit", ["edabit", "edabit", "edabit"]);

  repArr.push(itemReplace);
  console.log(repArr);  // ["edabit,edabit,edabit"]

}

repeat("edabit", 3);
