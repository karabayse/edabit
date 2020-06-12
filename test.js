// Given a sandwich (as an array), return an array of fillings inside the sandwich.
// This involves ignoring the first and last elements.
function getFillings(sandwich) {
  sandwich.shift();
  sandwich.pop();
  console.log(sandwich);
}

getFillings(["bread", "lettuce", "bacon", "tomato", "bread"]);
