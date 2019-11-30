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
    let constant = arr[i] - arr[i -1];
    console.log(constant);
    let lastEl = arr[arr.length - 1];
    console.log(lastEl);
    let nextEl = lastEl + constant;
    console.log(nextEl);
  }
}

nextElement([1, 3, 5, 7]);


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
  let arr = str.split(',');
  console.log(arr);
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
