/*
Write a function that retrieves the last n elements from an array.
Return "invalid" if n exceeds the length of the array.
Return an empty array if n == 0.
last([1, 2, 3, 4, 5], 1) ➞ [5]

last([4, 3, 9, 9, 7, 6], 3) ➞ [9, 7, 6]

last([1, 2, 3, 4, 5], 7) ➞ "invalid"

last([1, 2, 3, 4, 5], 0) ➞ []
*/
function last(a, n) {
  for (var i = 0; i < a.length; i++) {
    if (n > a.length) {
      console.log("invalid");;
    } else if (n == 0) {
      console.log([]);;
    } else if (typeof n == 'undefined') {
			console.log("invalid");;
		} else {
      console.log(a.slice(-n));
    }
  }
}

last([1, 2, 3, 4, 5], 1) // 5

last([4, 3, 9, 9, 7, 6], 3) // 9 7 6

last([1, 2, 3, 4, 5], 7) // invalid

last([1, 2, 3, 4, 5], 0) // []
