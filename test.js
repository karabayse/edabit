/*
Take a list of names.
Add "Hello" to every name.
Make one big string with all greetings.
The solution should be one string with a comma in between every "Hello (Name)".
*/
function greetPeople(names) {
  names.forEach((name, index) => names[index] = `Hello ${name}`);
  console.log(names);

  names.toString();
  console.log(names);
}

greetPeople(["Ironman", "Superman", "Antman", "Aquaman"]);
