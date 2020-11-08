// Filter out empty arrays
function removeEmptyArrays(arr) {
  return arr.filter(x => x.length !== 0)
}

removeEmptyArrays(["a", "b", []]) // ➞ ["a", "b"];
removeEmptyArrays([1, 2, [], 4]) // ➞ [1, 2, 4];
