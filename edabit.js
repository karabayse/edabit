function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

reverseString("hello");


// Given two strings, firstName and lastName,
// return a single string in the format "first last"
let str1 = "John ";
let str2 = "Doe";

function concatName(firstName, lastName) {
	let result = lastName.concat(firstName);
  console.log(result);
}

concatName(str2, str1);


// Modulo
function remainder(x, y) {
	return x % y;
}


// Create a function that takes in a word and determines whether or not it is plural.
// A plural word is one that ends in "s".
function isPlural(word) {
  let lastChar = word[word.length -1];
  if(lastChar == "s") {
    console.log("Plural");;
  } else {
    console.log("Singular");;
  }
}

isPlural("bird");
isPlural("birds");


// Check if an Integer is Divisible By Five
function divisibleByFive(int) {
	if (int % 5 == 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}

divisibleByFive(9);


// Create a function to concatenate two integer arrays
function concat(arr1, arr2) {
  let newArray = arr1.concat(arr2);
  console.log(newArray);
}

concat([1, 2, 3], [ 4, 5, 6]);


// Is the string empty?
function isEmpty(str) {
	if (str == '') {
    console.log("Empty string!");
  } else {
    console.log("String!");
  }
}

isEmpty('Not Empty!');


// Create a function that takes in three arguments (prob, prize, pay)
// and returns true if prob * prize > pay; otherwise return false.
function profitableGamble(prob, prize, pay) {
	if (prob * prize > pay) {
    console.log("True");;
  } else {
    console.log("False");;
  }
}

profitableGamble(2, 2, 5);


// You have chickens (2 legs), cows (4 legs) and pigs (4 legs) on your farm.
// Return the total number of legs on your farm.
function animals(chickens, cows, pigs) {
	let farmLegs = ((chickens * 2) + (cows * 4) + (pigs * 4));
  console.log(farmLegs);
}

animals(1, 2, 3);


// Create a function that takes an integer and returns true if it's divisible by 100,
// otherwise return false.
function divisibleByHundred(num) {
  if (num % 100 == 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}

divisibleByHundred(11);


// Write a function that takes the base and height of a triangle and return its area.
// Area of a triangle is (base * height / 2)
function triArea(base, height) {
  let area = ((base * height) / 2);
  console.log(area);
}

triArea(2, 4);


// Create a function that returns true if a string contains any spaces.
function hasSpaces(str) {
	if (str.indexOf(' ') >= 0) {
    console.log("True");
  } else {
    console.log("False");
  }
}

hasSpaces("String");
hasSpaces("String string");


// Create a function that returns the ASCII value of the passed in character.
function ctoa(c) {

}
