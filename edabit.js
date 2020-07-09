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
  let ASCII = c.charCodeAt(0);
  console.log(ASCII);
}

ctoa("A");
ctoa("F");


// Create a function that returns the smaller number.
// Numbers will be represented as strings, and your output should also be a string.
// If both numbers tie, return either number.
// Numbers will be positive.
function smallerNum(n1, n2) {
  let num1 = parseInt(n1);
  let num2 = parseInt(n2);

  if (num1 > num2) {
    console.log(num1);
  } else if (num2 > num1) {
    console.log(num2);
  } else if (num1 == num2) {
    console.log(num1 || num2);
  }
}

smallerNum("2", "2");
smallerNum("2", "1");
smallerNum("4", "5");


// Create a function that determines whether or not it's possible to split a pie
// fairly given these three parameters:
//
// -Total number of slices.
// -Number of recipients.
// -How many slices each person gets.
//
// Notes:
// -Return (trivially) true if there are zero people.
// -It's fine not to use the entire pie.
// -All test parameters are integers.
function equalSlices(total, people, each) {
  if (Number.isInteger((total) && (people) && (each))) {
    console.log("Is an integer");
  } else if ((total / people) == 0) {
    console.log("True");
  } else if ((total % people) == 0){
    console.log("Fair split!");
  } else if (people == 0) {
    console.log("True");
  } else if ((people * each) < total){
    console.log("True");
  } else {
    console.log("False");
  }
}

equalSlices(8, 0);
equalSlices(8, 4);
equalSlices(9, 4);
// equalSlices(a, b);


// Write a function to reverse an array.
function reverseArr(arr) {
  let reversedArray = arr.reverse();
  console.log(reversedArray);
}

reverseArr([1, 2, 3]);


// Write a function that takes a two-digit number and determines if it's the
// larger of two possible digit swaps.
function largerSwap(num) {
  let firstNum = String(num).charAt(0);
  let secondNum = String(num).charAt(1);

  if (firstNum > secondNum) {
    console.log("First number is larger!");
  } else if (secondNum > firstNum) {
    console.log("Second number is larger");
  } else if (firstNum === secondNum) {
    console.log("First number is the same as second number!");
  }
}

largerSwap(27);
largerSwap(72);
largerSwap(77);


// Check if an array includes an element
function check(arr, el) {
  // if el is in arr, true
  for (let i = 0; i <= arr.length; i++) {
    if (arr.includes(el)) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

check([0, 1, 2, 3, 4], 5);
check([0, 1, 2], 2);
check([0, 1, 2], 1);
check(['a', 'b', 'c'], 'd');


// Return a greeting using an arrow function
const helloName = (name) => {
  let str = "Hello, ";
  let greeting = str.concat(name) + "!";
  console.log(greeting);
}

helloName("Joe");


// Testing Exponentiation Operation
// Write a function that returns true if k**k == n for input (n, k)
function kToK(n, k) {
  return Math.pow(k,k) === n;
}

kToK(4, 2);
kToK(17, 3);
kToK('a', 4);
kToK(0, 0);
kToK(1, 1);
kToK(256, -4);


// Case Insensitive Comparison
// Write a function that validates whether two strings are identical
// Make this validator case insensitive
function match(s1, s2) {
  let news1 = s1.toLowerCase();
  console.log(news1);
  let news2 = s2.toLowerCase();
  console.log(news2);

  if (news1 === news2) {
    console.log("Match!");
  } else {
    console.log("Not a match!");
  }
}

match("Scooby Doo", "scooby doo");
match("Scooby Doo", "Scrappy Doo");


// Return the Total Number of Parameters
function numberArgs() {
  let argNum = arguments.length;
  console.log(argNum);
}

numberArgs(1, 2, 3, 4, "a", "b", "c");


// Truthy or Falsy
// Create a function that takes an argument of any data type and
// returns 1 if it's truthy and 0 if it's falsy
// Falsy values: false, null, undefined, 0, NaN, ""
function isTruthy(input) {
  if (input == true) {
    console.log(1);
  } else {
    console.log(0);
  }
}

isTruthy(1);
isTruthy(-1);
isTruthy();
isTruthy(0);
isTruthy(false);


// String to Integer and Vice Versa
function toInt(str) {
  let num = parseInt(str);
  console.log(num);
}

toInt("10");

function toStr(int1) {
  let str = int1.toString();
  console.log(str);
  console.log(typeof str);
}

toStr(10);


// Create a function that finds the maximum range of a triangle's third edge
// Any side of a triangle must be less than the other 2 sides added together
function nextEdge(side1, side2) {
  let maxRange = ((side1 + side2) -1);
  console.log(maxRange);
}

nextEdge(4, 5);


// Stack the boxes
// Write a function that takes a number n and returns the number of stacked boxes
function stackBoxes(n) {
  let model1 = 1;
  let model2 = 4;
  let model3 = 9;
  let model4 = 16;

  let numBoxes = n * n;
  console.log(numBoxes);
}

stackBoxes(5);


// Volume of a box
// Create a function that gets an object arguments with height, width and length
// of a box and returns the volume of the box
// Values are in an object
function volumeOfBox(sizes) {
  let sizesArray = new Array;
    for(let o in sizes) {
    sizesArray.push(sizes[o]);
    }
    let res = 1;
    for (let i = 0; i < sizesArray.length; i++) {
      res = res * sizesArray[i];
      console.log(res);
  }
}

volumeOfBox({
  "height": 3,
  "width": 4,
  "length": 5
});


// Check if Number is within a Given Range
// Given a number and an object with min and max properties,
// return true if the number lies within the given range (inclusive)

// Math.min()
// Returns the lowest-valued number passed into it,
// or NaN if any parameter isn't a number and can't be converted into one

// Math.max()
// Returns the largest of zero or more numbers

// return num >= range.min && num <= range.max;
function isInRange(num, range) {
  for (var key in range) {
    if ((range[key] !== NaN) &&
        (num !== NaN) &&
        (num >= Math.min(range[key])) &&
        (num <= Math.max(range[key]))) {
      console.log("True");
    } else {
      console.log("False");
    }
  }
}

isInRange(2, {
  minNum: 1,
  maxNum: 5
});


// Create a function that takes an array of numbers
// and return the first and last elements as a new array
function firstLast(arr) {
  let firstEl = arr[0];
  let lastEl = arr[arr.length - 1];
  let newArr = [firstEl, lastEl];
  console.log(newArr);
}

firstLast([1, 2, 3, 4]);


// Additive Inverse
// A number added with its additive inverse equals zero
// Create a function that returns an array of additive inverses

// Math.abs()
// -Math.abs()
function additiveInverse(arr) {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      let negNum = -Math.abs(arr[i]);
      newArr.push(negNum);
    } else if (arr[i] < 0) {
      let posNum = Math.abs(arr[i]);
      newArr.push(posNum);
    }
  }
  console.log(newArr);
}

additiveInverse([-1, 2, -3]);


// Missing Third Angle
// You are given 2 out of 3 of the angles in a triangle, in degrees
// Write a function that classifies the missing angle as either
// "acute", "right", or "obtuse" based on its degrees

// An acute angle is one smaller than 90 degrees
// A right angle is one that is exactly 90 degrees
// An obtuse angle is one greater than 90 degrees (but smaller than 180 degrees)
function missingAngle(angle1, angle2) {
  if (angle1 + angle2 > 90) {
    console.log("angle3 is acute");
  } else if (angle1 + angle2 == 90) {
    console.log("angle3 is a right angle");
  } else if (angle1 + angle2 < 90) {
    console.log("angle3 is obtuse");
  }
}

missingAngle(45, 46);
missingAngle(45, 45);
missingAngle(45, 44);


// Create a function that returns true if an input string contains only
// uppercase or only lowercase letters
function sameCase(str) {
  if ((str == str.toUpperCase()) || (str == str.toLowerCase())) {
    console.log("True");
  } else {
    console.log("False");
  }
}

sameCase("UPPERCASE");
sameCase("lowercase");
sameCase("UPPER&lower");


// Create a function that takes in an array and returns
// true if all its values are even, and false otherwise
function checkAllEven(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log("True");
    } else {
      console.log("False");
    }
  }
}

// checkAllEven([1, 2, 3, 4, 5, 6]);
checkAllEven([2, 4, 6, 8]);


// In semantic versioning a piece of software can be represented
// in a format like this example: 6.1.9

// The first number is the major version
// The second number is the minor version
// The third number is the patch (bug fixes)

// Write three separate functions, one to retrieve each element
// in the semantic versioning specification
function retrieveMajor(semver) {
  let semverArr = semver.split(".");
  console.log(semverArr);

  for (let i = 0; i < semverArr.length; i++) {
    console.log(semverArr[0]);
  }
}

retrieveMajor("6.1.9");

function retrieveMinor(semver) {
  let semverArr = semver.split(".");
  console.log(semverArr);

  for (let i = 0; i < semverArr.length; i++) {
    console.log(semverArr[1]);
  }
}

retrieveMinor("6.1.9");

function retrievePatch(semver) {
  let semverArr = semver.split(".");
  console.log(semverArr);

  for (let i = 0; i < semverArr.length; i++) {
    if (semverArr[2] == null) {
      console.log("No Patch");
    } else {
    console.log(semverArr[2]);
    }
  }
}

retrievePatch("6.1.9");
retrievePatch("6.1");


// Write a function that takes an integer and
// returns a string with the given number of "a"s in Edabit
function howManyTimes(num) {
  let ed = "Ed";
  let a = ("a".repeat(num));
  console.log(a);
  let bit = "bit";
  let edabit = ed.concat(a).concat(bit);
  console.log(edabit);
}

howManyTimes(5);


// Create a function that takes a number as an argument and
// returns an array of numbers counting down from this number to zero
// The argument will always be greater than or equal to zero
function countdown(start) {
  let countdownArr = [start];

  while (start > 0) {
    if (start > 0) {
      start--;
      countdownArr.push(start);
    } else if (start == 0) {
      console.log(countdownArr);
    }
  }
  console.log(countdownArr);
}

countdown(8);
countdown(3);
countdown(0);


// Write a function that returns true if two rooks can attack each other, and false otherwise
// Assume no blocking pieces
// Two rooks can attack each other if they share the same row (letter) or column (number)
function canCapture([yourRook, opponentsRook]) {
  let yRSplit = yourRook.split("");
  let oRSplit = opponentsRook.split("");

  if (yRSplit[0] == oRSplit[0]) {
    console.log("True");
  } else if (yRSplit[1] == oRSplit[1]) {
    console.log("True");
  } else {
    console.log("False");
  }
}

canCapture(["A8", "E8"]);
canCapture(["A1", "B2"]);


// Write two functions:
// firstArg() should return the first parameter passed in
// lastArg() should return the last parameter passed in
// Return undefined if the function takes no parameters
function firstArg() {
  console.log(arguments[0]);
}

firstArg(1, 2, 3, 4, 5, 6);

function lastArg() {
  console.log(arguments[arguments.length - 1]);
}

lastArg(2, 4, 6);


// Create a function that takes an array of hurdle heights and a jumper's jump height,
// and determine whether or not the hurdler can clear all the hurdles

// A hurdler can clear a hurdle if their jump height is greater than or equal to
// the hurdle height
function hurdleJump(hurdles, jumpHeight) {
  let clearArr = [];
  let stumbleArr = [];
  for (let i = 0; i < hurdles.length; i++) {
    if (jumpHeight >= hurdles[i]) {
      clearArr.push(hurdles[i]);
    } else if (jumpHeight < hurdles[i]) {
      stumbleArr.push(hurdles[i]);
    }
  }
  console.log(clearArr);
  console.log(stumbleArr);
  if (stumbleArr.length == 0) {
    console.log("True");
  } else {
    console.log("False");
  }
}

hurdleJump([1, 2, 3], 3);
hurdleJump([1, 2, 3], 2);


// Create a function which filters out strings from an array
// and returns a new array containing only integers
function filterList(l) {
  let intArr = [];

  for (let i = 0; i < l.length; i++) {
    if (Number.isInteger(l[i])) {
      intArr.push(l[i]);
    } else {
      console.log("String");
    }
  }
  console.log(intArr);
}

filterList([1, 2, 3, "a", "b", "c"]);


// Create a function that finds the index of a given item if the array is sorted
function search(arr, item) {
  let indx = arr.indexOf(item);
  console.log(indx);
}

search([1, 2, 3, 4, 5], 3) // 3 is at index 2


// Write a function that reverses a string recursively
function reverse(str) {
  if (str == null || str.length < 2) return str;
  return reverse(str.substring(1)) + str.charAt(0);
}

reverse("string");


// Given an array of integers, return the difference between
// the largest and smallest integers in the array
function difference(nums) {
  let smallest_number = Math.min(...nums);
  let largest_number = Math.max(...nums);

  let diff = (largest_number - smallest_number);
  console.log(diff);
}

difference([50, 15, 3, 7, 24]);


// Create a function that takes an object as an argument and
// returns a string with facts about the city.
// The city facts will need to be extracted from the object's three properties:
// name
// population
// continent
// The string should have the following format:
// X has a population of Y and is situated in Z
// (where X is the city name, Y is the population and
// Z is the continent the city is situated in).
function cityFacts(city) {
  let facts = Object.values(city);
  console.log(facts);

  for (let i = 0; i < facts.length; i++) {
    let x = facts[0];
    let y = facts[1];
    let z = facts[2];
    console.log(x + " has a population of " + y + " and is situated in " + z);
  }
}

cityFacts({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe"
});


// Create a function to calculate the determinant of a 2 x 2 matrix
// The determinant of the following matrix is: ad - bc: [[a, b], [c, d]]
function calcDeterminant(matrix) {
  // let det = ((a * d) - (b * c));
  // console.log(det);
}

calcDeterminant([[2, 3], [4, 5]]);


// Create a function that adds a string ending to each member in an array
function addEnding(arr, ending) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] += ending;
    console.log(arr);
  }
}

addEnding(["bend", "sharpen", "mean"], "ing");


// Write a function that takes two numbers and returns if they should be:
// added, subtracted, multiplied or divided to get 24
// If none of the operations can give 24, return null
function operation(num1, num2) {
  if (num1 + num2 == 24) {
    console.log("added");
  } else if ((num1 - num2 == 24) || (num2 - num1 == 24)) {
    console.log("subtracted");
  } else if (num1 * num2 == 24) {
    console.log("multiplied");
  } else if ((num1 / num2 == 24) || num2 / num1 == 24) {
    console.log("divided");
  } else {
    console.log("null");
  }
}

operation(12, 12);
operation(48, 24);
operation(2, 12);
operation(48, 2);
operation(1, 2);


// Create a function that takes a number as an argument
// Add up all the numbers from 1 to the number you passed to the function
// For example, if the input is 4 then your function should return 10
// because 1 + 2 + 3 + 4 = 10
// Expect any positive number between 1 and 1000
function addUp(num) {
  if (1 <= num <= 1000) {
  let numArr = [];
  while (num > 0, num--) {
    numArr.push(num);
    console.log(numArr);

    }
    const add = (a, b) =>
      a + b;
      const sum = numArr.reduce(add);
      console.log(sum);
    }
  }

  addUp(5);
  addUp(1);


  // A word has been split into a left part and a right part
  // Re-form the word by adding both halves together,
  // changing the first character to an uppercase letter
  function getWord(left, right) {
    let leftUp = left.charAt(0).toUpperCase() + left.slice(1);
    let word = leftUp.concat(right);
    console.log(word);
  }

  getWord("java", "Script");


  // Create a function to remove all null values from an array
  function removeNull(arr) {
    let filteredArr = arr.filter(function (el) {
      return el != null;
    });
    console.log(filteredArr);
  }

  removeNull([10, "JavaScript", null, "C#", null, 5]);


// Create a function that takes three numbers (the hourly wage of an employee)
// and returns the difference between the highest and lowest-paid employee
function programmers(one, two, three) {
  let maxNum = Math.max(one, two, three);
  let minNum = Math.min(one, two, three);
  let diff = maxNum - minNum;
  console.log(diff);
}

programmers(30, 40, 50);
programmers(5, 10, 15);


// Create a function that takes a number as its only argument and returns true
// if it's less than or equal to zero, otherwise return false
function lessThanOrEqualToZero(num) {
  if (num <= 0) {
    console.log("True");
  } else {
    console.log("False");
  }
}

lessThanOrEqualToZero(5);
lessThanOrEqualToZero(-2);


// Create a function that returns the next element in an arithmetic sequence
// In an arithmetic sequence, each element is formed by adding the same constant
// to the previous element
// All input arrays will contain integers only
function nextElement(arr) {
  for (var i = 0; i < arr.length; i++) {
    // calculate difference between second element and first element
    let constant = arr[1] - arr[0];

    // determine value of last element in array
    let lastEl = arr[arr.length - 1];

    // calculate next element
    let nextEl = lastEl + constant;

    // return next element
    return nextEl;
  }
}

nextElement([-1, 1, 3, 5, 7]);


// Write a function that checks if two numbers are either:
// Smaller than 0
// Greater than 0
// Exactly 0
function both(n1, n2) {
  if (n1 < 0 && n2 < 0) {
    console.log("True");
  } else if (n1 > 0 && n2 > 0) {
    console.log("True");
  } else if (n1 === 0 && n2 === 0) {
    console.log("True");
  } else {
    console.log("False");
  }
}

both(-2, -3);
both(2, 3);
both(0, 0);
both(-2, 2);


// Create a function that takes three number arguments —
// one number as an input and two additional numbers representing the endpoints
// of a closed range — and return the number limited to this range
//
// If the number falls within the range, the number should be returned
// If the number is less than the lower limit of the range, the lower limit
// should be returned.
// If the number is greater than the upper limit of the range, the upper limit
// should be returned

// All test inputs will be valid numbers
// All test inputs' range parameters will be in the correct order
// (i.e. the lower range will be less than or equal to the upper range)
function limitNumber(num, rangeLow, rangeHigh) {
  if (num > rangeLow && num < rangeHigh) {
    console.log(num);
  } else if (num < rangeLow){
    console.log(rangeLow);
  } else if (num > rangeHigh) {
    console.log(rangeHigh);
  } else if (num === rangeLow) {
    console.log(num);
  } else if (num === rangeHigh) {
    console.log(num);
  }
}

limitNumber(4, 3, 5);
limitNumber(4, 5, 7);
limitNumber(4, 1, 3);
limitNumber(4, 4, 6);
limitNumber(4, 2, 4);


// Create a function that checks if the argument is an integer or a string
// Return int if it's an integer and str if it's a string
function intOrString(param) {
  if (Number(param)) {
    console.log("int");
  } else if (String(param)) {
    console.log("str");
  } else {
    console.log("othertype");
  }
}

intOrString(1);
intOrString("string");


// Write a function that turns a comma-delimited list into an array of strings
function toArray(str) {
  let newStr = str.replace(/,/g, '');
	let newArr = newStr.split(' ');

	if (str === '') {
		return []
	} else {
		 return newArr;
	}
}

toArray("January, February, March");
toArray(" ");


// Write a function that converts hours into seconds
// 60 seconds in a minute, 60 minutes in an hour
function howManySeconds(hours) {
  let seconds = 3600 * hours;
  console.log(seconds);
}

howManySeconds(6);


// Convert minutes to seconds
function convert(minutes) {
  let seconds = 60 * minutes;
  console.log(seconds);
}

convert(6);


// Create a function that takes two integers and checks if they are equal
// If there is a string then it should return false
function isEqual(num1, num2) {
  if (typeof num1 === String || typeof num2 === String) {
    console.log("False");
  } else if (num1 === num2) {
    console.log("True");
  } else {
    console.log("False");
  }
}

isEqual('num1', 'num2');
isEqual(1, 1);
isEqual(1, 2);


// Given an array of numbers, negate all elements contained within
// Negating a positive value -+n will return -n, because all +'s are removed
// Negating a negative value --n will return n, because the first - turns the
// second minus into a +
function negate(arr) {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      let newNum = -arr[i];
      newArr.push(newNum);
    } else if (arr[i] < 0) {
      let newNum = -+arr[i];
      newArr.push(newNum);
    }
  }
  console.log(newArr);
}

negate([-1, 1, 2, 3]);


// A friend of yours was asked to implement a simple function that verifies the
// equality of two different given values a and b so it returns false in every
// case. The only given condition is that he must use nothing more than the two
// variables names and the equal symbol = in his code (besides return, obviously).

// After testing, each given case fails to return false! Find the cause of the
// error and correct your friend's function.
// Fix this wrong function!
function checkEquality(a, b) {
  return a === b;
}


// Write a function that takes two integers, hours and minutes, and converts them to seconds.
function convert(hours, minutes) {
  let hourSeconds = 3600 * hours;
  console.log(hourSeconds);
  let minSeconds = 60 * minutes;
  console.log(minSeconds);
  let hourMinSeconds = hourSeconds + minSeconds;
  console.log(hourMinSeconds);
}

convert(4, 60);


// Find the bug
// The packaging machine is running the getContainer function to retrieve the
// container of a product. But something is not right
// Run the tests first to see the results before making changes and understand
// why bread is stuffed in bottles and candy is not in plastic
function getContainer(product) {
	let container
  switch (product) {
		case "Bread":
			container = "bag"
      break
		case "Beer":
		case "Milk":
			container = "bottle"
			break
		case "Cereal":
			container = "box"
			break
		case "Eggs":
			container = "carton"
			break
		case "Candy":
			container = "plastic"
      break
		default:
			container = null
	}

	return container
}


// Does the object contain a given key?
// Write a function that returns true if a hash contains the specified key,
// and false otherwise
function hasKey(obj, key) {
  if (key in obj) {
    console.log("True");
  } else {
    console.log("False");
  }
}

hasKey({a: "a", b: "b", c: "c"}, "d");


// Reverse and capitalize
// Create a function that takes a string of lowercase characters and returns
// that string reversed and capitalized
function reverseCapitalize(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  var capString = joinArray.toUpperCase();
  return capString;
}

reverseCapitalize("string");


// Calculate the total volume of a pizza
// You are given the two parameters:
// radius
// height
// If you multiply the height for the square of the radius and
// multiply the result for the mathematical constant π (Pi), you will obtain the
// total volume of the pizza
// Implement a function that returns the volume of the pizza as a whole number,
// rounding it to the nearest integer
// (and rounding up for numbers with .5 as decimal part).
// Example: volPizza(1, 1) ➞ 3
// (radius² x height x π) = 3.14159... rounded to the nearest integer
function volPizza(radius, height) {
  let pizzaVolume = Math.pow(radius, 2) * height * Math.PI;
  let volumeRounded = Math.round(pizzaVolume);
  console.log(volumeRounded);
}

volPizza(5, 9);


// You work for a manufacturer, and have been asked to calculate the total
// profit made on the sales of a product
// You are given an object containing the cost price per unit (in dollars), sell
// price per unit (in dollars), and the starting inventory
// Return the total profit made, rounded to the nearest dollar
// Assume all of the inventory has been sold
function profit(info) {
  let totalProfit = (info.inventory * info.sellPrice) - (info.inventory * info.costPrice);
  let roundedProfit = Math.round(totalProfit);
  console.log(roundedProfit);
}

profit({
  costPrice: 5.39,
  sellPrice: 8.79,
  inventory: 100
});


// Array of consecutive numbers
// Implement a function that returns an array containing all the consecutive
// numbers in ascendant order from the given value low up to the given value high
// (bounds included)
function getSequence(low, high) {
  let list = [];
  for (let i = low; i <= high; i++) {
    list.push(i);
  }
  return list;
}

getSequence(1, 5);


// Date Format Conversion
// Create a function that converts a date formatted as MM/DD/YYYY to a format
// required as YYYYDDMM
// The parameter userDate and the return value are strings
function formatDate(userDate) {
    let year = userDate.substring(6,10);
    let day = userDate.substring(3,5);
    let month = userDate.substring(0,2);

    let newFormat = year + day + month;
    console.log(newFormat);
}

formatDate(06/03/2019);


// Write a function that removes all vowels from a string
function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}

removeVowels("onomatopoeia");


// A leap year has one day added to February for being synchronized with the
// seasonal year
// A leap year appears with a regular frequency, which is determined by the rule below:

// The year is exactly divisible by 400, or exactly divisible by 4 and not
// exactly divisible by 100
// Given a year you must implement a function that returns true if it's a leap
// year, or false if it's not
function isLeap(year) {
  if (year % 400 === 0) {
    console.log("Leap Year");
  } else if (year % 4 === 0 && year % 100 !== 0) {
    console.log("Leap Year");
  } else {
    console.log("Not a Leap Year");
  }
}

isLeap(2019);
isLeap(2020);


// Create a function that removes the first and last characters from a string
// If the string is 2 or fewer characters long, return the string itself
function removeFirstLast(str) {
  if (str.length <= 2) {
    console.log(str);;
  } else {
    console.log(str.slice(1,-1));
  }
}

str("string");
str("st");


// This is a reverse coding challenge. Normally you're given explicit directions
// with how to create a function. Here, you must generate your own function to
// satisfy the relationship between the inputs and outputs.
// Your task is to create a function that, when fed the inputs below, produce
// the sample outputs shown.
/*
[5, 7, 8, 2, 1], 2 ➞ [1, 1, 0, 0, 1]  arr % num ?

[9, 8, 16, 47], 4 ➞ [1, 0, 0, 3]

[17, 11, 99, 55, 23, 1], 5 ➞ [2, 1, 4, 0, 3, 1]

[6, 1], 7 ➞ [6, 1]

[3, 2, 9], 3 ➞ [0, 2, 0]

[48, 22, 0, 19, 33, 100], 10 ➞ [8, 2, 0, 9, 3, 0]
*/
function mysteryFunc(arr, num) {
    let newArr = [];
    for (var i = 0; i < arr.length; i++) {
    let newNum = arr[i] % num;
		newArr.push(newNum);
  }
  return newArr;
}


// Create a function to calculate the determinant of a 2 x 2 matrix
//The determinant of the following matrix is: ad - bc:
//[[a, b], [c, d]]
function calcDeterminant(matrix) {
  return (matrix[0][0]*matrix[1][1])-(matrix[0][1]*matrix[1][0]);
}


// Create a function that takes a string and returns true or false,
// depending on whether the characters are in order or not
// Check for alphabetic and numeric order
function isInOrder(str) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] < str[i - 1]) {
      return false;
    } else if (str[i] > str[i - 1]) {
      return true;
    } else if (str.charAt() == /^[a-zA-Z]*$/) {
      var s=str.toLowerCase().split("");
    for(var i=1; i<s.length; i++) {
        if (s[i] < s[i - 1]) {
            return false;
        }
    }
    return true;
    }
  }
}


// Suppose I want to define a function that removes the last element of an array
// each time I call it, but does not mutate the original array. Fix the code so
// that the results are no longer mutating the array.
function minusOne(arr) {
  // arr.pop()
  // return arr
  let newArr = [];
  for (var i = 1; i < arr.length; i++) {
   newArr.push(i);
  }
  return newArr;
}


// Create a function to multiply all values in an array by the amount of values
// in that array
function MultiplyByLength(arr) {
  let multiplier = arr.length;
	let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let result = arr[i] * multiplier;
		newArr.push(result);
  }
	return newArr;
}


// A pair of strings form a strange pair if both of the following are true:
// The 1st string's first letter = 2nd string's last letter.
// The 1st string's last letter = 2nd string's first letter.
// Create a function that returns true if a pair of strings constitutes a
// strange pair, and false otherwise.
function isStrangePair(str1, str2) {
  if ((str1.charAt(0) === str2.slice(-1)) &&
      (str1.slice(-1) === str2.charAt(0))) {
    return true;
  } else {
    return false;
  }
}


// Create a function that filters out an array of state names into two
// categories based on the second parameter.
// Abbreviations: abb
// Full names: full
function filterStateNames(arr, type) {
  let abbArr = [];
  let fullArr = [];
  let nullArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length === 2) {
      abbArr.push(arr[i]);
    } else if (arr[i].length > 2) {
      fullArr.push(arr[i]);
    } else {
      nullArr.push(arr[i]);
    }
  }
  if (type === "abb") {
    return abbArr;
  } else if (type === "full") {
    return fullArr;
  } else {
    return nullArr;
  }
}


// Write a function that returns true if there exists at least one number that
// is larger than or equal to n.
// Return false for an empty array.
function existsHigher(arr, n) {
  let max = Math.max(...arr);
  console.log(max);

  if (max >= n) {
    console.log(true);
  } else if (max < n) {
    console.log(false);
  } else if (arr.length == 0) {
    console.log(false);
  }
}

existsHigher([1, 3, 4, 5], 6); // false
existsHigher([], 7); // false
existsHigher([8, 9, 11], 10) // true


// Given a sorted array of numbers, remove any numbers that are divisible by 13.
// Return the amended array.
function unlucky13(nums) {
  var i = nums.length;
	while (i--) {
    if (nums[i] % 13 == 0) {
        nums.splice(i, 1);
    }
	}
	return nums;
}


// Create a function that takes an array of numbers and returns only the even values
function noOdds(arr) {
  var i = arr.length;
  while (i--) {
    if (arr[i] % 2 == 0) {

    } else {
      arr.splice(i, 1);
    }
  }
  return arr;
}


// Create a function that goes through the array, incrementing (+1) for each odd
// number and decrementing (-1) for each even number.
function transform(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      arr[i] -= 1;
    } else if (arr[i] % 2 != 0) {
      arr[i] += 1;
    }
  }
  return arr;
}


// Create a function that returns true if two arrays contain identical values,
// and false otherwise.
function checkEquals(arr1, arr2) {
	if (arr1.join() === arr2.join()) {
  	return true
 	} else {
  	return false
 	}
}


// Write a function that takes three string arguments (first, last, word) and
// returns true if (when alphabetically sorted) word is found between first and last.
// All letters will be in lowercase.
function isBetween(first, last, word) {
/*
A Number, indicating whether the reference string comes before, after or is
the same as the compareString in sort order. Returns one of three values:
-1 if the reference string is sorted before the compareString
0 if the two strings are equal
1 if the reference string is sorted after the compareString
*/
  let comp1 = word.localeCompare(first);
  let comp2 = word.localeCompare(last);

  if (comp1 == 1 && comp2 == -1) {
    return true;
  } else {
    return false;
  }
}


// Create a function that takes an array of students and returns an array of student names.
function getStudentNames(students) {
  let nameArr = students.map(a => a.name);
  return nameArr;
}


// Create a function that takes an array of strings and returns the words that
// are exactly four letters.
function isFourLetters(arr) {
  let fourArr = [];
  let notArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length == 4) {
      fourArr.push(arr[i]);
    } else {
      notArr.push(arr[i]);
    }
  }
  return fourArr;
}


// Create a function that accepts a string (of a persons first and last name)
// and returns a string with the first and last name swapped.
// There will be exactly one space between the first and last name.
function nameShuffle(str) {
  let arr = str.split(" ");
  let first = arr[0];
  let last = arr[1];
  arr[0] = last;
  arr[1] = first;
  str = arr.join(" ");
  return str;
}


// Create a function to extract the name of the subreddit from its URL.
function subReddit(link) {
  let subredditName = url.split('/')[1];
  return subredditName;
}


// Create a function that replaces all the vowels in a string with a specified character.
function replaceVowels(str, ch) {
  let result = str.replace(/[aeiou]/gi,ch);
	return result;
}


// You work in a toy car workshop, and your job is to build toy cars from a
// collection of parts. Each toy car needs 4 wheels, 1 car body, and 2 figures
// of people to be placed inside. Given the total number of wheels, car bodies
// and figures available, how many complete toy cars can you make?
function cars(wheels, bodies, figures) {
  let car = [(wheels * 4), (bodies * 1), (figures *2)];
  let carNum;
  if (wheels < 4 || bodies < 1 || figures < 2) {
    carNum = 0;
  } else if () {

  } else () {

  }
}


// Write a regular expression that matches a string if it contains at least one digit.
let x = /[0-9]/;


// Create a function that returns the smaller number
// Numbers will be represented as strings, and your output should also be a string
// If both numbers tie, return either number
// Numbers will be positive
// Attempt to solve this without converting to integers
function smallerNum(n1, n2) {
  let num1 = Number(n1);
  let num2 = Number(n2);

  if (num1 < num2) {
    return n1
  } else if (num2 < num1) {
    return n2
  } else if (num1 == num2) {
    return n1 || n2;
  }
}


// Write a function that maps files to their extension names
function getExtension(arr) {
  let extArr = [];
  for (var i = 0; i < arr.length; i++) {
    let ext = arr[i].split('.').pop();
    extArr.push(ext);
  }
  return extArr;
}


// Sometimes an object will be missing properties we are expecting.
// We can avoid undefined errors by using default values.
// Use ES6 object destructuring to add a default value of 1 to the one variable.
// Ignore the .toString() function (used for validation).
/*
const obj =  { two : 2 }

var { one, two } = obj

console.log(one) // outputs undefined
*/
const str = `({ one, two } = { one : 1, two : 2 }).toString()`

let str = {
	one: 1,
	two: 2
};

let { one, two } = str;


// Given a word, create a function that checks whether it is a palindrome
function checkPalindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}


// Create a function that takes in an initial word and filters out an array to
// contain words that start with the same letters as the initial word.
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.
// Example: dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
function dictionary(initial, words) {
  let initLength = initial.length;
  let newArr = [];

  for (var i = 0; i < words.length; i++) {
    let initMatch = words[i].substring(0,initLength);
    if (initMatch == initial) {
      newArr.push(words[i]);
    }
  }
  return newArr;
}


// Write a function that returns true if all integers in an array are factors
// of a number, and false otherwise.
function checkFactors(factors, num) {
  for (let i = 0; i < factors.length; i++){
    let element = factors[i];
    if (num % element !== 0){
      return false;
    }
  }
  return true;
}


// Create a function that takes a string and returns a string with its letters
// in alphabetical order.
function AlphabetSoup(str) {
  let arr = str.split("");  // convert string to array
  let alphaArr = arr.sort();  // alphabetize array
  let noComArr = alphaArr.join("");  // remove commas from array
  let alphaStr = noComArr.toString();  // convert array to string
  return alphaStr;
}


// Create a function that filters out an array to include numbers who only have
// a certain number of digits.
function filterDigitLength(arr, num) {
  let numArr = [];
  let noArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].toString().length == num) {
      numArr.push(arr[i]);
    } else if (arr[i].toString().length != num) {
      noArr.push(arr[i]);
    }
  }
  return numArr;
}


// Given an array of 10 numbers, return the maximum possible total made by
// summing just 5 of the 10 numbers.
function maxTotal(nums) {
  // function to sort numerically
  // sort method sorts values as strings -> 100 is sorted before 25
  function sortNumber(a, b) {
    return a - b;
  }

  let sortArr = nums.sort(sortNumber);  // sort array elements in ascending order
  let sliceArr = sortArr.slice(5, 10);  // return selected elements from array

  let arrTotal = 0;

  for(let i = 0; i < sliceArr.length; i++) {
    arrTotal += sliceArr[i];
  }
  return arrTotal;
}


// Write a function that returns the lexicographically first and lexicographically
// last rearrangements of a string.
// Output the results in the following manner:
// firstAndLast(string) ➞ [first, last]
// firstAndLast("scoop") ➞ ["coops", "spooc"]
function firstAndLast(s) {
  let flArr = [];
  let arr = s.split(''); // split string into array of letters
  console.log(arr); // ["s", "c", "o", "o", "p"]
  let sortArr = arr.sort(); // sort array in ascending order
  console.log(sortArr); // ["c", "o", "o", "p", "s"]

  let first = sortArr.toString().replace(/,/g, ''); // convert array to string
  console.log(first); // coops
  let last = sortArr.reverse().toString().replace(/,/g, ''); // reverse array
  console.log(last); // spooc

  flArr.push(first, last);
  console.log(flArr);
}

firstAndLast("scoop");


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


// Write a function that returns true if all characters in a string are identical
// and false otherwise.
function isIdentical(s) {
  if (s.split('').every(char => char === s[0])) {
    return true;
  } else {
    return false;
  }
}

isIdentical("identical");


// Create a function that takes two strings and returns true if the first string
// ends with the second string; otherwise return false.
function checkEnding(str1, str2) {
  if (str1.endsWith(str2)) {
    return true;
  } else {
    return false;
  }
}


// Create a function that finds all even numbers from 1 to the given number.
// findEvenNums(8) ➞ [2, 4, 6, 8]
function findEvenNums(num) {
  let evenArr = [];

  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
        evenArr.push(i);
    }
  }
  console.log(evenArr);;
}

findEvenNums(8);


// Given two strings,p1 and p2, return which person drew their gun the fastest.
// If both are drawn at the same time, return "tie".
/*
showdown(
  "   Bang!        ",
  "        Bang!   "
) ➞ "p1"

 // p1 draws his gun sooner than p2

showdown(
  "               Bang! ",
  "             Bang!   "
) ➞ "p2"

showdown(
  "     Bang!   ",
  "     Bang!   "
) ➞ "tie"
*/
function showdown(p1, p2) {
  /*
  localeCompare
  str1.localeCompare(str2);
  Returns -1 if str1 is sorted before str2
  Returns 0 if the two strings are equal
  Returns 1 if str1 is sorted after str2
  */
  if (p1.localeCompare(p2) == 1) {
    console.log("p1");
  } else if (p1.localeCompare(p2) == -1) {
    console.log("p2");
  } else if (p1.localeCompare(p2) == 0) {
    console.log("tie");
  }
}

showdown(" Bang", "Bang");


// A repdigit is a positive number composed out of the same digit.
// Create a function that takes an integer and returns whether it's a repdigit or not.
// The number 0 should return true (even though it's not a positive number).
function isRepdigit(num) {
  let numStrArr = num.toString().split("");

  for (var i = 0; i < numStrArr.length; i++) {
    if (num < 0) {
      return false;
    } else if (num == 0) {
      return true;
    } else if (i == i) {
      return true;
    }
  }
}


// Create a function that takes two arguments (item, times). The first argument
// (item) is the item that needs repeating while the second argument (times) is
// the number of times the item is to be repeated. Return the result in an array.
// item can be either a string or a number.
// times will always be a number.
// repeat("edabit", 3) ➞ ["edabit", "edabit", "edabit"]
function repeat(item, times) {
  let repArr = [];

  if (times == 0) {
    console.log(repArr);
  } else {
    repArr.push(item);
    while (repArr.length < times) {
      repArr.push(item);
    }
  }
  console.log(repArr);
}

repeat("edabit", 3);


/*
Given a class for a BasicPlan, write the classes for StandardPlan and PremiumPlan which have class properties of the following:

BasicPlan	StandardPlan	PremiumPlan
✓	✓	✓	canStream
✓	✓	✓	canDownload
✓	✓	✓	hasSD
✓	✓	hasHD
✓	hasUHD
1	2	4	numOfDevices
$8.99	$12.99	$15.99	price
*/
// Write the classes for StandardPlan and PremiumPlan here!
class BasicPlan {
	static canStream = true;
	static canDownload = true;
	static numOfDevices = 1;
	static hasSD = true;
	static hasHD = false;
	static hasUHD = false;
	static price = '$8.99';
}


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


/*
Take a list of names.
Add "Hello" to every name.
Make one big string with all greetings.
The solution should be one string with a comma in between every "Hello (Name)".
greetPeople(["Angela", "Joe"]) ➞ "Hello Angela, Hello Joe"
*/
function greetPeople(names) {
  names.forEach((name, index) => names[index] = `Hello ${name}`);
  console.log(names);

  let str = names.join(', ');
  console.log(str);
}

greetPeople(["Ironman", "Superman", "Antman", "Aquaman"]);


// Create a function that takes a number and return an array of three numbers:
// half of the number, quarter of the number and an eighth of the number.
const halfQuarterEighth = (n) => {
  let numArr = [];

  let half = n / 2;
  let quarter = n / 4;
  let eighth = n / 8;

  numArr.push(half, quarter, eighth);
  console.log(numArr);
}

halfQuarterEighth(64);


/*
RegEx Special Characters
Using the .test() method in your function, return whether a string contains the
characters "a" and "c" (in that order) with any number of characters (including
zero) between them.
*/
function asterisk(string) {
  // (/^[ac]+$/)
}


// Create a function that returns the product of all odd integers in an array.
function oddProduct(arr) {
  oddArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      oddArr.push(i);
    }
    let product = oddArr.reduce( (a,b) => a * b, 0 );
    console.log(product);
  }
}

oddProduct([1,2,3]);


// Create a function that converts two arrays of x- and y- coordinates into an
// array of (x,y) coordinates.
// convertCartesian([9, 8, 3], [1, 1, 1])
// ➞ [[9, 1], [8, 1], [3, 1]]
function convertCartesian(x, y) {
  // loop through two arrays and create new arrays
  // new arrays:  [position 0, position 0], [position 1, position 1], etc.
}


// Create a function that takes in two arrays: the array of user-typed words,
// and the array of correctly-typed words and outputs an array containing 1s
// (correctly-typed words) and -1s (incorrectly-typed words).
function correctStream(user, correct) {
  let outputArr = [];

  for (var i = 0; i < user.length; i++) {
    for (var j = 0; j < correct.length; i++) {
      if (i == j) {
        outputArr.push(1);
      } else if (i != j) {
        outputArr.push(-1);
      }
    }
  }
  console.log(outputArr);
}

correctStream(["cat", "blue", "skt", "umbrells", "paddy"], ["cat", "blue", "sky", "umbrella", "paddy"]);


// Create a function that finds the maximum range of a triangle's third edge,
// where the side lengths are all integers.
// The sum of two sides must always be greater than the third side
function nextEdge(side1, side2) {
  let sum = side1 + side2;
  let max = sum - 1;
  return max;
}


// Create a function that returns the minimum number of removals to make the sum
// of all elements in an array even.
// If the sum is already even, return 0  ->  minimumRemovals([5, 7, 9, 11]) ➞ 0
// The output will be either 0 or 1
function minimumRemovals(arr) {
  // add all numbers
  let sum = arr.reduce(function(a, b){
    return a + b;
  }, 0);
  console.log(sum);
  // determine odd or even
  if (sum % 2 == 0) {
    console.log(0);
  // if not even
  } else if (sum % 2 !== 0) {
    // code to remove numbers
    // loop through array
    for (let i = 0; i < arr.length; i++) {
      // remove an odd number to make it even
      if (i % 2 !== 0) {
        arr.splice(i);
      }
      console.log(1);
    }
  }
}

minimumRemovals([5, 7, 9, 11]);
minimumRemovals([6, 7, 9, 11]);


/*
You can think of character classes as characters with special meaning.
They are recognized as special when you place the \ before the character.

Here is a list of the character classes in JavaScript:
., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]

There is a hidden word in this string:
const str = "**^&$Regular#$%Expressions$%$$%^**"
Write the regular expression that reveals the hidden word.
You have to remove all of the special characters to reveal the word.
Use the character class \w in your expression.
*/
const str = "**^&$Regular#$%Expressions$%$$%^**"

const REGEXP = str.replace(/[^\w\s]/gi, '')g

console.log(REGEXP);


/*
Create a function that takes a number as an argument and returns "Fizz", "Buzz" or "FizzBuzz".

If the number is a multiple of 3 the output should be "Fizz".
If the number given is a multiple of 5, the output should be "Buzz".
If the number given is a multiple of both 3 and 5, the output should be "FizzBuzz".
If the number is not a multiple of either 3 or 5, the number should be output on its own.
*/
function FizzBuzz(num) {
  if (num % 3 !== 0 && num % 5 !== 0) {
    console.log(num);
  } else if (num % 3 == 0 && num % 5 == 0) {
    console.log("FuzzBuzz");
  } else if (num % 5 == 0) {
    console.log("Buzz");
  } else if (num % 3 == 0) {
    console.log("Fizz");
  }
}

FizzBuzz(9);


// Given a sandwich (as an array), return an array of fillings inside the sandwich.
// This involves ignoring the first and last elements.
function getFillings(sandwich) {
  sandwich.shift();
  sandwich.pop();
  console.log(sandwich);
}

getFillings(["bread", "lettuce", "bacon", "tomato", "bread"]);


/*
Create a function that takes two parameters and, if both parameters are strings,
add them as if they were integers or if the two parameters are integers, concatenate them.
If the two parameters are different data types, return null.
All parameters will either be strings or integers.
Examples:
stupidAddition(1, 2) ➞ "12"

stupidAddition("1", "2") ➞ 3

stupidAddition("1", 2) ➞ null
*/
function stupidAddition(a, b) {
  if (typeof a == "string" && typeof b == "string") {
    let aInt = parseInt(a);
    let bInt = parseInt(b);
    let add = aInt + bInt;
    console.log(add);
  } else if (typeof a == "number" && typeof b == "number") {
    let concatenate = "" + a + b;
    console.log(concatenate);
  } else if (typeof a !== typeof b) {
    console.log("null");
  }
}

stupidAddition(1, 2);
stupidAddition("1", "2");
stupidAddition(1, "2");


// Given an array, transform that array into a mirror.
// Do not repeat the last item of the given array.
// mirror([0, 2, 4, 6]) ➞ [0, 2, 4, 6, 4, 2, 0]
function mirror(arr) {
  let copyArr = [];
  for (var i = 0; i < arr.length; i++) {
    copyArr.push(arr[i]);
  }

  let revArr = arr.reverse();
  console.log(revArr); // [6, 4, 2, 0]

  revArr.shift();
  console.log(revArr); // [4, 2, 0]

  for (var i = 0; i < revArr.length; i++) {
    copyArr.push(arr[i]);
  }

  console.log(copyArr);
}

mirror([0, 2, 4, 6]);


/*
Given a class for a BasicPlan, write the classes for StandardPlan and PremiumPlan
which have class properties of the following:

BasicPlan	StandardPlan	PremiumPlan
✓	✓	✓	canStream
✓	✓	✓	canDownload
✓	✓	✓	hasSD
✓	✓	hasHD
✓	hasUHD
1	2	4	numOfDevices
$8.99	$12.99	$15.99	price

Try to extend the classes
*/
class BasicPlan {
	static canStream = true;
	static canDownload = true;
	static numOfDevices = 1;
	static hasSD = true;
	static hasHD = false;
	static hasUHD = false;
	static price = '$8.99';
}

// Write the classes for StandardPlan and PremiumPlan here!
class StandardPlan extends BasicPlan {
	static canStream = true;
	static canDownload = true;
	static numOfDevices = 2;
	static hasSD = true;
	static hasHD = true;
	static hasUHD = false;
	static price = '$12.99';
}

class PremiumPlan extends BasicPlan {
	static canStream = true;
	static canDownload = true;
	static numOfDevices = 4;
	static hasSD = true;
	static hasHD = true;
	static hasUHD = true;
	static price = '$15.99';
}

// Write a function that returns true if the product of an array is divisible by
// the sum of that same array. Otherwise, return false.
function divisible(arr) {
  let duplicateArr = arr.slice();
  let productArr = arr.reduce( (a,b) => a * b);
  let sumArr = duplicateArr.reduce( (a,b) => a + b);

  if (productArr % sumArr === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

divisible([4, 2, 6]) // ➞ true

divisible([3, 5, 1]) //➞ false


/*
Smash factor is a term in golf that relates to the amount of energy transferred
from the club head to the golf ball.
The formula for calculating smash factor is ball speed divided by club speed.

Create a function that takes ball speed bs and club speed cs as arguments and
returns the smash factor to the nearest hundredth.
*/
function smashFactor(bs, cs) {
  let sFHundred = Math.round((bs / cs) * 100) / 100;
  console.log(sFHundred);
}

smashFactor(139.4, 93.8);


/*
You are given two parameters: a string word being the word to format, and
another string style being the lowercased initial of the style to apply.

"b" is for bold
"i" is for italics
"c" is for inline code
"s" is for strikethrough

You have to implement a function that returns a string being the word surrounded
by the special characters used to apply the given style.

To correctly apply a format, the word has to both start and end with one or two
specific special characters.

There are no spaces between the characters and the word.
*/
function mdFormat(word, style) {
  if (style == "b") {
    console.log("**" + word + "**");
  } else if (style == "i") {
    console.log("_" + word + "_");
  } else if (style == "c") {
    console.log("`" + word + "`");
  } else if (style= "s") {
    console.log("~~" + word + "~~");
  }
}
// Alternatively use interpolation rather than concatenation:
//return `**${str}**`;

mdFormat("word", "s");


// Given a string of letters, how many capital letters are there?
function capitalLetters(str) {
  let numUpper = str.length - str.replace(/[A-Z]/g, '').length;
  console.log(numUpper);
}
