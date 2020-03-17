// Google's logo can be stretched depending on how many pages it lets you skip forward to.
// Let's say we wanted to change the amount of pages that Google could skip to.
// Create a function where given a number of pages n, return the word 'Google'
// but with the correct number of "o"s.
// If n is equal to or less than 1, return invalid.
function googlify(n) {
  if (n <= 1) {
    return "invalid";
  } else {
    let googStr = "Google";
    let googArr = googStr.split('');
    console.log(googArr); // ["G", "o", "o", "g", "l", "e"]

    let oS = "o".repeat(n - 2);
    console.log(oS); // oooooo

    let googO = googArr.splice(3, 0, oS);
    let newArr = googArr;
    console.log(newArr); // ["G", "o", "o", "oooooo", "g", "l", "e"]

    let google = newArr.toString().replace(/,/g, '');
    console.log(google); // Goooooooogle
  }
}

googlify(8);

/*
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
*/
