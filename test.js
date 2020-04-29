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
