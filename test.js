// Google's logo can be stretched depending on how many pages it lets you skip forward to.
// Let's say we wanted to change the amount of pages that Google could skip to.
// Create a function where given a number of pages n, return the word 'Google'
// but with the correct number of "o"s.
function googlify(n) {
  let googStr = "Google";
  let googArr = googStr.split('');
  console.log(googArr); // ["G", "o", "o", "g", "l", "e"]

  let oS = "o";

  let googO = googArr.splice(2, 0, oS.repeat(n));
  console.log(googO); // []

  let google = googO.toString().replace(/,/g, '');
  console.log(google); // 
}

googlify(8);

/*
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
*/
