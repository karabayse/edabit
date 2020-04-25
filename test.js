/*
Sam and Frodo need to be close. If they are side by side in the array, your
function should return true. If there is a name between them, return false.
No matter who comes first, the result must be true if Frodo and Sam are side by side.
There is only one Sam and one Frodo in the array.
middleEarth(["Frodo", "Sam", "Gandalf"]) ➞ true
*/
function middleEarth(arr) {
  let sam = arr.indexOf("Sam");
  let frodo = arr.indexOf("Frodo");

  if (sam + 1 == frodo) {
    console.log(true);
  } else if (sam -1 == frodo) {
    console.log(true);
  } else if (frodo + 1 == sam) {
    console.log(true);
  } else if (frodo - 1 == sam) {
    console.log(true);
  } else {
    console.log(false);
  }
}

middleEarth(["Frodo", "Gandalf", "Sam"]);
middleEarth(["Frodo", "Sam", "Gandalf"]);
middleEarth(["Sam", "Frodo", "Gandalf"]);
