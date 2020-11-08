// Create a function that takes a sentence and turns every "i" into "wi" and "e"
// into "we", and add "owo" at the end.
function owofied(sentence) {
  let sentence2 = sentence.replace("i", "wi").replace(new RegExp("e", "g"), "we").concat(" owo");

  console.log(sentence2);
}

/*
Expected: "I'm gonna rwidwe 'twil I can't no morwe owo"
instead : "I'm gonna rwidwe 'til I can't no morwe owo"
*/

owofied("I'm gonna ride 'til I can't no more")
// ➞ "I'm gonna rwidwe 'twil I can't no morwe owo"

owofied("Do you ever feel like a plastic bag")
// ➞ "Do you wevwer fwewel lwikwe a plastwic bag owo"

owofied("Cause baby you're a firework")
// ➞ "Causwe baby you'rwe a fwirwework owo"
