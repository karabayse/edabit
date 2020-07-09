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

mdFormat("word", "s");

const str = "some text here";
// with interpolation:
return `**${str}**`; // '**some text here**' is returned
// with concatenation
return '**' + str + '**'; // same output, '**some text here**'
