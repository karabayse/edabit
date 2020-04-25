/*
Sam and Frodo need to be close. If they are side by side in the array, your
function should return true. If there is a name between them, return false.
No matter who comes first, the result must be true if Frodo and Sam are side by side.
There is only one Sam and one Frodo in the array.
middleEarth(["Frodo", "Sam", "Gandalf"]) ➞ true
*/
function middleEarth(arr) {
  for (var i = 0; i < arr.length; i++) {
    if ((i == "Frodo") && (i - 1 == "Sam")) {
      console.log(true);
    } else if ((i == "Frodo") && (i + 1 == "Sam")) {
      console.log(true);
    } else if ((i == "Sam") && (i - 1 == "Frodo")){
      console.log(true);
    } else if ((i == "Sam") && (i + 1 == "Frodo")) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

middleEarth(["Frodo", "Gandalf", "Sam"]);
middleEarth("Frodo", "Sam", "Gandalf");
middleEarth("Sam", "Frodo", "Gandalf");
