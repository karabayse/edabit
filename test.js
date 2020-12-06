// Create a function that accepts a Date object
// and returns true if it's Christmas Eve (December 24th) and
// false otherwise.
// Keep in mind JavaScript's Date month is 0 based,
// meaning December is the 11th month while January is 0.
// Dates are zero zero based (see resources).
// All test cases contain valid dates.
function timeForMilkAndCookies(date) {
  if (date.getDay() === 24 && date.getMonth() === 11) {
    return true;
  }
}

timeForMilkAndCookies(new Date(2013, 11, 24)) // ➞ true

timeForMilkAndCookies(new Date(2013, 0, 23)) // ➞ false

timeForMilkAndCookies(new Date(3000, 11, 24)) // ➞ true
